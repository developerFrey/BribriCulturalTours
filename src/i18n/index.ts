/**
 * Tiny, dependency-free internationalisation (i18n) layer.
 *
 * How it works
 * ------------
 * 1. Static markup declares *which* text it needs through data attributes:
 *      <h2 data-i18n="about.title"></h2>                 -> sets innerHTML
 *      <button data-i18n-attr="aria-label:menu.open">    -> sets attributes
 *    `applyTranslations()` fills those elements for the active language.
 * 2. Dynamic markup (experience cards, modal, gallery…) calls `t()` directly
 *    and re-renders itself through `onLanguageChange()`.
 * 3. The chosen language is remembered in localStorage; on the first visit
 *    every visitor starts in English.
 *
 * Translation strings are trusted, hand-written content, so injecting them
 * as HTML (to keep <strong>, <em>, <br /> …) is safe.
 */
import { en, type Dictionary } from './locales/en';
import { es } from './locales/es';

export type Language = 'en' | 'es';

export const LANGUAGES: readonly Language[] = ['en', 'es'];

const dictionaries: Record<Language, Dictionary> = { en, es };

const STORAGE_KEY = 'bribri-language';

/** Default language for first-time visitors. */
const DEFAULT_LANGUAGE: Language = 'en';

/**
 * Every valid dotted path that points at a string inside the dictionary,
 * e.g. "nav.experiences" or "policies.items.0.title".
 * Typos in keys are therefore caught by the TypeScript compiler.
 */
type Path<T> = T extends string
  ? never
  : T extends readonly (infer Item)[]
    ? Item extends string
      ? `${number}`
      : `${number}.${Path<Item>}`
    : { [K in keyof T & string]: T[K] extends string ? K : `${K}.${Path<T[K]>}` }[keyof T & string];

export type TranslationKey = Path<Dictionary>;

type Listener = (language: Language) => void;

let currentLanguage: Language = detectInitialLanguage();
const listeners = new Set<Listener>();

/** Uses the language the visitor picked before; otherwise English. */
function detectInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    /* Storage can be blocked (private mode, strict settings) – ignore. */
  }
  return DEFAULT_LANGUAGE;
}

/** Walks a dotted path ("a.b.0.c") through a nested object. */
function resolve(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((node, segment) => {
    if (node && typeof node === 'object') return (node as Record<string, unknown>)[segment];
    return undefined;
  }, source);
}

export const getLanguage = (): Language => currentLanguage;

/** Full dictionary of the active language (useful for lists such as policies). */
export const getDictionary = (): Dictionary => dictionaries[currentLanguage];

/**
 * Returns the translated string for `key`.
 * `{name}` placeholders are replaced with the matching value in `vars`.
 * Falls back to English, then to the key itself, so the UI never shows "undefined".
 */
export function t(key: TranslationKey, vars: Record<string, string | number> = {}): string {
  const value = resolve(dictionaries[currentLanguage], key) ?? resolve(dictionaries.en, key);
  const text = typeof value === 'string' ? value : key;
  return text.replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match));
}

/** Fills every `[data-i18n]` / `[data-i18n-attr]` element inside `root`. */
export function applyTranslations(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18n as TranslationKey);
  });

  // Format: data-i18n-attr="aria-label:menu.open; title:menu.title"
  root.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr!.split(';').forEach((pair) => {
      const [attribute, key] = pair.split(':').map((part) => part.trim());
      if (attribute && key) element.setAttribute(attribute, t(key as TranslationKey));
    });
  });
}

/** Keeps <html lang>, <title> and the meta description in sync for SEO / screen readers. */
function updateDocumentMetadata(): void {
  document.documentElement.lang = currentLanguage;
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', currentLanguage === 'es' ? 'es_CR' : 'en_US');
}

/** Subscribes to language changes. Returns an unsubscribe function. */
export function onLanguageChange(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Switches the whole page to `language` and notifies dynamic components. */
export function setLanguage(language: Language): void {
  if (language === currentLanguage) return;
  currentLanguage = language;

  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    /* Preference simply won't persist – the switch still works. */
  }

  applyTranslations();
  updateDocumentMetadata();
  listeners.forEach((listener) => listener(language));
}

/** First pass after the shell is rendered. */
export function initI18n(): void {
  applyTranslations();
  updateDocumentMetadata();
}
