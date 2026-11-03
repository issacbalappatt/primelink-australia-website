const MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = /\.(pdf|jpe?g|png|xlsx?|csv|docx?)$/i;
const attempts = new Map();
const allowedHosts = new Set(['primelinkaustralia.com.au', 'www.primelinkaustralia.com.au', 'primelink-australia-website.pages.dev']);
const json = (body, status = 200) => Response.json(body, {
  status, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
});
const fail = (message, status = 400) => json({ success: false, error: message }, status);

function base64(bytes) {
  let binary = '';
  for (let offset = 0; offset < bytes.length; offset += 8192) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
  }
  return btoa(binary);
}

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST', 'X-Robots-Tag': 'noindex' } });
  }
  const url = new URL(request.url);
  const origin = request.headers.get('Origin');
  if (!allowedHosts.has(url.hostname)) return fail('This form is unavailable on preview deployments.', 403);
  if (origin && origin !== url.origin) return fail('Please submit the form from the Primelink website.', 403);
  if (!request.headers.get('Content-Type')?.startsWith('multipart/form-data')) return fail('Invalid form format.');
  if (Number(request.headers.get('Content-Length') || 0) > MAX_BYTES + 256 * 1024) return fail('Attachments exceed the 10 MB limit.', 413);

  let fd;
  try { fd = await request.formData(); }
  catch { return fail('The form could not be read. Please try again.'); }
  if (fd.get('company_website')) return json({ success: true });
  const kind = fd.get('form');
  if (kind !== 'Contact' && kind !== 'Request for quote') return fail('Invalid form.');
  const value = (key) => typeof fd.get(key) === 'string' ? fd.get(key).trim() : '';
  const name = value('name');
  const email = value('email');
  if (!name || name.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return fail('Please enter your name and a valid email address.');
  }
  const isQuote = kind === 'Request for quote';
  if (isQuote && (!value('company') || !value('country'))) return fail('Please enter your company and destination country.');
  if (!isQuote && !value('message')) return fail('Please enter a message.');
  const parts = fd.getAll('line_part[]');
  const descriptions = fd.getAll('line_desc[]');
  if (isQuote && !parts.some((v) => String(v).trim()) && !descriptions.some((v) => String(v).trim()) &&
      !fd.getAll('attachments').some((v) => typeof v !== 'string' && v.size > 0)) {
    return fail('Please add a part number, description or attachment.');
  }
  let fieldCount = 0;
  let totalText = 0;
  for (const [, entry] of fd) {
    fieldCount++;
    if (typeof entry === 'string') {
      totalText += entry.length;
      if (entry.length > 12000) return fail('A field is too long. Please attach your detailed parts list instead.');
    }
  }
  if (fieldCount > 300 || totalText > 60000 || parts.length > 50) return fail('Please attach a spares list for requests with more than 50 lines.');

  const files = fd.getAll('attachments').filter((v) => typeof v !== 'string' && v.size > 0);
  if (files.length > 5 || files.reduce((sum, file) => sum + file.size, 0) > MAX_BYTES) return fail('Attach up to 5 files, 10 MB combined.', 413);
  if (files.some((file) => !ALLOWED_EXTENSIONS.test(file.name))) return fail('Allowed attachments: PDF, JPG, PNG, Excel, CSV and Word.');
  if (!env.RESEND_API_KEY) return fail('Online enquiries are temporarily unavailable. Please email info@primelinkaustralia.com.au.', 503);

  // Best-effort per-isolate throttle. Use a Cloudflare WAF rate-limit rule for a global limit.
  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) {
    const now = Date.now();
    for (const [key, entry] of attempts) if (entry.until <= now) attempts.delete(key);
    const entry = attempts.get(ip) || { count: 0, until: now + 60000 };
    if (entry.count >= 5) return fail('Too many requests. Please wait a minute and try again.', 429);
    if (attempts.size > 5000) return fail('Please try again shortly.', 429);
    entry.count++;
    attempts.set(ip, entry);
  }

  const labels = { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', country: 'Country',
    topic: 'Topic', message: 'Message', category: 'Product family', ex_rating: 'Hazardous-area rating',
    required_by: 'Required by', delivery_point: 'Delivery point', notes: 'Notes' };
  const lines = [kind, '', ...Object.entries(labels).flatMap(([key, label]) => value(key) ? [label + ': ' + value(key)] : [])];
  const makers = fd.getAll('line_maker[]');
  const quantities = fd.getAll('line_qty[]');
  if (isQuote) {
    lines.push('', 'Parts:');
    for (let i = 0; i < Math.max(parts.length, descriptions.length); i++) {
      if (!String(parts[i] || '').trim() && !String(descriptions[i] || '').trim()) continue;
      const qty = String(quantities[i] || '1');
      if (!/^[1-9]\d{0,5}$/.test(qty)) return fail('Please enter a valid quantity for each part.');
      lines.push((i + 1) + '. ' + [parts[i], makers[i], descriptions[i]].filter(Boolean).join(' | ') + ' | Qty: ' + qty);
    }
    lines.push('', 'Documents: ' + fd.getAll('documents').join(', '));
  }
  const attachments = [];
  for (const file of files) {
    attachments.push({ filename: file.name.replace(/[\r\n\\/]/g, '_').slice(0, 180), content: base64(new Uint8Array(await file.arrayBuffer())) });
  }
  const submissionId = value('submission_id');
  const headers = { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' };
  if (/^[0-9a-f-]{36}$/i.test(submissionId)) headers['Idempotency-Key'] = 'enquiry/' + submissionId;
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers,
      body: JSON.stringify({
        from: env.ENQUIRY_FROM || 'Primelink Website <onboarding@resend.dev>',
        to: [isQuote ? (env.RFQ_TO || 'info@primelinkaustralia.com.au') : 'info@primelinkaustralia.com.au'],
        reply_to: email,
        subject: (isQuote ? 'Website quote request: ' + value('company') : 'Website enquiry: ' + value('topic')).replace(/[\r\n]/g, ' ').slice(0, 200),
        text: lines.join('\n'),
        ...(attachments.length ? { attachments } : {}),
      }),
      signal: AbortSignal.timeout(20000),
    });
    const result = await response.json();
    if (!response.ok || !result.id) return fail('Your request could not be delivered. Please try again or email info@primelinkaustralia.com.au.', 502);
    return json({ success: true, reference: result.id });
  } catch {
    return fail('The email service did not respond. Please retry with the same details or email info@primelinkaustralia.com.au.', 502);
  }
}
