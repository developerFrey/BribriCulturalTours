/**
 * EN / ES switcher in the navigation bar.
 * Highlights the active language and toggles to the other one on click.
 */
import { getLanguage, onLanguageChange, setLanguage } from '../i18n';
import { $, $$ } from '../utils/dom';

function highlightActiveLanguage(): void {
  const language = getLanguage();
  $$('[data-language-option]').forEach((option) =>
    option.classList.toggle('language-toggle__option--active', option.dataset.languageOption === language),
  );
}

export function initLanguageToggle(): void {
  const button = $<HTMLButtonElement>('[data-language-toggle]');
  if (!button) return;

  button.addEventListener('click', () => setLanguage(getLanguage() === 'en' ? 'es' : 'en'));

  onLanguageChange(highlightActiveLanguage);
  highlightActiveLanguage();
}
