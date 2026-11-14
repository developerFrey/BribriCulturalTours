/**
 * Markup helpers shared by every template.
 *
 * Templates only describe *structure*; the visible copy is injected by the
 * i18n layer through `data-i18n` attributes (see src/i18n/index.ts).
 */
import type { TranslationKey } from '../i18n';

/** An empty element whose content is filled with the translation of `key`. */
export const text = (key: TranslationKey, tag = 'span', className = ''): string =>
  `<${tag}${className ? ` class="${className}"` : ''} data-i18n="${key}"></${tag}>`;

/** Decorative arrow used on buttons and links (hidden from screen readers). */
export const arrow = (symbol = '↗'): string => `<span class="arrow" aria-hidden="true">${symbol}</span>`;

/** Attributes for links that open in a new tab. */
export const EXTERNAL = 'target="_blank" rel="noopener noreferrer"';

/**
 * Renders `count` elements whose keys only differ by index, e.g. the
 * paragraphs of a section: `repeat(3, (i) => text(\`about.paragraphs.${i}\`, 'p'))`.
 */
export const repeat = (count: number, render: (index: number) => string): string =>
  Array.from({ length: count }, (_, index) => render(index)).join('');
