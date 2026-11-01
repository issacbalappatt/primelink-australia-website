/** Lower-case the first letter for use mid-sentence, but keep acronyms (FPSO, LNG) and the rest of the text as written. */
export const midSentence = (s: string) => (/^[A-Z]{2,}/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1));
