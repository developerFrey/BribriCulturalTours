/**
 * Small DOM helpers to keep feature modules short and readable.
 */

/** `document.querySelector` with a generic element type. */
export const $ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T | null =>
  root.querySelector<T>(selector);

/** `document.querySelectorAll` returned as a real array. */
export const $$ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T[] =>
  Array.from(root.querySelectorAll<T>(selector));

/** Two-digit, zero-padded number ("7" -> "07"). */
export const pad2 = (value: number): string => String(value).padStart(2, '0');

/** Escapes text for safe use inside an HTML attribute value. */
export const escapeAttribute = (value: string): string =>
  value.replace(/&(?!amp;|lt;|gt;|quot;|#\d+;)/g, '&amp;').replace(/"/g, '&quot;');

/** Strips tags/entities so HTML copy can be used as plain text (e.g. alt attributes). */
export const toPlainText = (html: string): string => {
  const element = document.createElement('div');
  element.innerHTML = html;
  return element.textContent ?? '';
};
