/**
 * Both enquiry forms submit to the same server endpoint.
 * Never show success until the server confirms Resend accepted the email.
 */
export function initForm(form: HTMLFormElement, opts: { subject: (fd: FormData) => string; to: string }) {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const success = document.getElementById(form.dataset.success || '');
  let pending = false;
  let submissionId = crypto.randomUUID();
  form.addEventListener('input', () => { submissionId = crypto.randomUUID(); });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;
    const fd = new FormData(form);
    fd.set('submission_id', submissionId);
    const files = Array.from(fd.values()).filter((v): v is File => v instanceof File && v.size > 0);
    const setStatus = (message: string) => { if (status) status.textContent = message; };
    if (files.length > 5 || files.reduce((sum, file) => sum + file.size, 0) > 10 * 1024 * 1024) {
      setStatus('Please attach up to 5 files with a combined size of 10 MB or less.');
      return;
    }
    form.querySelector('[data-email-fallback]')?.remove();
    pending = true;
    button?.setAttribute('disabled', '');
    form.setAttribute('aria-busy', 'true');
    setStatus('Sending your request...');
    try {
      const response = await fetch(form.dataset.endpoint || '/api/enquiry', {
        method: 'POST', body: fd, headers: { Accept: 'application/json' },
      });
      const data = await response.json();
      if (!response.ok || data.success !== true) {
        throw new Error(data.error || 'Your request could not be sent. Please try again.');
      }
      form.classList.add('hidden');
      success?.classList.remove('hidden');
      success?.focus();
    } catch (error) {
      setStatus(`${error instanceof Error ? error.message : 'Your request could not be sent.'} Your details are still here. You can also email ${opts.to}.`);
      const text = Array.from(fd.entries())
        .filter(([key, value]) => typeof value === 'string' && !['company_website', 'submission_id'].includes(key))
        .map(([key, value]) => `${key}: ${value}`).join('\n');
      const fallback = document.createElement('a');
      fallback.dataset.emailFallback = '';
      fallback.className = 'link mt-3 inline-block';
      fallback.textContent = files.length ? 'Send via email instead (attach your files manually)' : 'Send via email instead';
      fallback.href = `mailto:${opts.to}?subject=${encodeURIComponent(opts.subject(fd))}&body=${encodeURIComponent(text)}`;
      status?.insertAdjacentElement('afterend', fallback);
    } finally {
      pending = false;
      form.removeAttribute('aria-busy');
      button?.removeAttribute('disabled');
    }
  });
}
