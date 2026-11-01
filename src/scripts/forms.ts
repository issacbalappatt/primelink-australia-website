/**
 * Shared form handler for the quote and contact forms.
 *
 * - If the form has a data-endpoint (from PUBLIC_FORM_ENDPOINT), the form is
 *   posted there as multipart form data (attachments included).
 * - If not, the request is turned into an email and opened in the visitor's
 *   email app, so no request is lost before a form service is set up.
 */
export function initForm(form: HTMLFormElement, opts: { subject: (fd: FormData) => string; to: string }) {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const success = document.getElementById(form.dataset.success || '');

  const setStatus = (msg: string, kind: 'error' | 'info') => {
    if (!status) return;
    status.textContent = msg;
    status.className = `t-small mt-4 ${kind === 'error' ? 'text-[#b42318]' : 'text-steel'}`;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    if (fd.get('company_website')) return; // spam trap

    const endpoint = form.dataset.endpoint;
    if (endpoint) {
      button?.setAttribute('disabled', '');
      setStatus('Sending your request…', 'info');
      try {
        const res = await fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
        form.classList.add('hidden');
        success?.classList.remove('hidden');
        success?.focus();
      } catch {
        setStatus(`The request did not send. Check your connection and try again, or email ${opts.to}.`, 'error');
      } finally {
        button?.removeAttribute('disabled');
      }
      return;
    }

    // Email fallback
    const lines: string[] = [];
    const seen = new Set<string>();
    for (const [key, value] of fd.entries()) {
      if (value instanceof File || key === 'company_website') continue;
      const label = form.querySelector(`[name="${CSS.escape(key)}"]`)?.getAttribute('data-label') || key;
      const v = String(value).trim();
      if (!v) continue;
      if (key.startsWith('line_')) continue;
      if (seen.has(key)) {
        lines[lines.length - 1] += `, ${v}`;
        continue;
      }
      seen.add(key);
      lines.push(`${label}: ${v}`);
    }
    const items = Array.from(form.querySelectorAll<HTMLElement>('[data-line]'))
      .map((row, i) => {
        const get = (n: string) => (row.querySelector<HTMLInputElement>(`[name^="line_${n}"]`)?.value || '').trim();
        const part = get('part');
        const desc = get('desc');
        if (!part && !desc) return '';
        return `${i + 1}. ${[part, get('maker'), desc].filter(Boolean).join(' | ')}  x ${get('qty') || '1'}`;
      })
      .filter(Boolean);
    const body = [...(items.length ? ['Items:', ...items, ''] : []), ...lines].join('\n');
    const hasFiles = Array.from(fd.values()).some((v) => v instanceof File && v.size > 0);
    window.location.href = `mailto:${opts.to}?subject=${encodeURIComponent(opts.subject(fd))}&body=${encodeURIComponent(body + (hasFiles ? '\n\n(Please attach your files to this email.)' : ''))}`;
    setStatus('Your email app should open with the request filled in. Send the email to complete the request.', 'info');
  });
}
