import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequest } from '../functions/api/enquiry.js';

const origin = 'https://www.primelinkaustralia.com.au';
const env = { RESEND_API_KEY: 'test-placeholder', ENQUIRY_FROM: 'Primelink <website@primelinkaustralia.com.au>' };
function form(extra = {}) {
  const fd = new FormData();
  for (const [key, value] of Object.entries({ form: 'Contact', name: 'Test Sender', email: 'sender@example.com', message: 'Integration test', topic: 'Other', ...extra })) {
    fd.set(key, value);
  }
  return fd;
}
const request = (fd, headers = {}) => new Request(origin + '/api/enquiry', { method: 'POST', headers: { Origin: origin, ...headers }, body: fd });
const run = (fd, config = env, headers) => onRequest({ request: request(fd, headers), env: config });
const realFetch = globalThis.fetch;

test('contact: fixed recipient, reply-to and accepted provider ID', async () => {
  let payload;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    payload = JSON.parse(options.body);
    return Response.json({ id: 'email-test-1' });
  };
  try {
    const result = await run(form({ to: 'attacker@example.com', message: '<script>test</script>' }));
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { success: true, reference: 'email-test-1' });
    assert.deepEqual(payload.to, ['info@primelinkaustralia.com.au']);
    assert.equal(payload.reply_to, 'sender@example.com');
    assert.ok(payload.text.includes('<script>test</script>'));
    assert.equal(payload.html, undefined);
  } finally { globalThis.fetch = realFetch; }
});

test('quote includes multiple lines, documents, attachment and stable retry key', async () => {
  const fd = form({ form: 'Request for quote', company: 'Test Company', country: 'Australia', submission_id: '13ea41b9-e462-4484-8c98-37751436d295' });
  for (const part of ['PART-A', 'PART-B']) fd.append('line_part[]', part);
  for (const qty of ['2', '3']) fd.append('line_qty[]', qty);
  fd.append('documents', 'Certificate of conformity');
  fd.append('documents', 'IECEx or ATEX certificate');
  fd.append('attachments', new File(['test document'], 'sample.pdf', { type: 'application/pdf' }));
  let payload;
  globalThis.fetch = async (url, options) => {
    payload = JSON.parse(options.body);
    assert.equal(options.headers['Idempotency-Key'], 'enquiry/13ea41b9-e462-4484-8c98-37751436d295');
    return Response.json({ id: 'quote-test' });
  };
  try {
    assert.equal((await run(fd)).status, 200);
    assert.match(payload.text, /PART-A.*Qty: 2/);
    assert.match(payload.text, /PART-B.*Qty: 3/);
    assert.ok(payload.text.includes('IECEx or ATEX certificate'));
    assert.equal(atob(payload.attachments[0].content), 'test document');
  } finally { globalThis.fetch = realFetch; }
});

test('no secret never reports success', async () => {
  const response = await run(form(), {});
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, false);
});
test('validation rejects bad address, missing message and empty RFQ', async () => {
  assert.equal((await run(form({ email: 'invalid' }))).status, 400);
  assert.equal((await run(form({ message: '' }))).status, 400);
  assert.equal((await run(form({ form: 'Request for quote', company: 'Test', country: 'Australia' }))).status, 400);
});
test('cross-origin and preview hosts cannot send', async () => {
  assert.equal((await run(form(), env, { Origin: 'https://evil.example' })).status, 403);
  const req = new Request('https://preview.primelink-australia-website.pages.dev/api/enquiry', { method: 'POST', body: form() });
  assert.equal((await onRequest({ request: req, env })).status, 403);
});
test('honeypot never calls the provider', async () => {
  globalThis.fetch = async () => { throw new Error('must not call'); };
  try { assert.equal((await run(form({ company_website: 'spam' }))).status, 200); }
  finally { globalThis.fetch = realFetch; }
});
test('forbidden attachments and excessive file count fail', async () => {
  const fd = form();
  fd.append('attachments', new File(['no'], 'payload.exe'));
  assert.equal((await run(fd)).status, 400);
  fd.delete('attachments');
  for (let i = 0; i < 6; i++) fd.append('attachments', new File(['ok'], i + '.pdf'));
  assert.equal((await run(fd)).status, 413);
});
test('provider rejection and network failure never report success', async () => {
  globalThis.fetch = async () => Response.json({ message: 'Unauthorized' }, { status: 401 });
  try {
    const response = await run(form());
    assert.equal(response.status, 502);
    assert.equal((await response.json()).success, false);
    globalThis.fetch = async () => { throw new Error('network unavailable'); };
    assert.equal((await run(form())).status, 502);
  } finally { globalThis.fetch = realFetch; }
});
test('GET cannot send and best-effort IP limit rejects the sixth request', async () => {
  assert.equal((await onRequest({ request: new Request(origin + '/api/enquiry'), env })).status, 405);
  globalThis.fetch = async () => Response.json({ id: 'rate-test' });
  try {
    for (let i = 0; i < 5; i++) assert.equal((await run(form(), env, { 'CF-Connecting-IP': '192.0.2.1' })).status, 200);
    assert.equal((await run(form(), env, { 'CF-Connecting-IP': '192.0.2.1' })).status, 429);
  } finally { globalThis.fetch = realFetch; }
});
