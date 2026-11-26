/**
 * "Read more" dialog with the full description of an experience.
 * If the language changes while it is open, the content is swapped in place.
 */
import { whatsappLink } from '../config';
import { getExperience } from '../data/experiences';
import { getLanguage, onLanguageChange, t } from '../i18n';
import { $, $$, toPlainText } from '../utils/dom';

let modal: HTMLElement | null = null;
/** Id of the experience currently shown (null when closed). */
let currentId: string | null = null;
/** Element that had focus before opening, restored on close for accessibility. */
let lastFocused: HTMLElement | null = null;

/** Writes the experience data into the `[data-modal="…"]` slots. */
function fillModal(id: string): boolean {
  const experience = getExperience(getLanguage(), id);
  if (!modal || !experience) return false;

  const slots: Record<string, string> = {
    category: t(`experiences.categories.${experience.category}`),
    title: experience.title,
    details: experience.details,
    location: experience.location,
    duration: experience.duration,
    price: experience.price,
  };
  // Content is our own trusted copy, so innerHTML is safe here.
  $$('[data-modal]', modal).forEach((slot) => {
    slot.innerHTML = slots[slot.dataset.modal ?? ''] ?? '';
  });

  // "Check availability" opens WhatsApp with a message naming this tour.
  const whatsapp = $<HTMLAnchorElement>('[data-modal-whatsapp]', modal);
  if (whatsapp) {
    whatsapp.href = whatsappLink(t('modal.whatsappMessage', { tour: toPlainText(experience.title) }));
  }
  return true;
}

export function openExperienceModal(id: string): void {
  if (!fillModal(id)) return;
  currentId = id;
  lastFocused = document.activeElement as HTMLElement | null;

  modal!.hidden = false;
  document.body.classList.add('modal-open');
  $('.experience-modal__panel', modal!)?.scrollTo({ top: 0 });
  $<HTMLButtonElement>('.experience-modal__close', modal!)?.focus();
}

export function closeExperienceModal(): void {
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  currentId = null;
  document.body.classList.remove('modal-open');
  lastFocused?.focus();
}

export function initModal(): void {
  modal = $('.experience-modal');
  if (!modal) return;

  $$('[data-close-modal]', modal).forEach((element) => element.addEventListener('click', closeExperienceModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeExperienceModal();
  });

  onLanguageChange(() => {
    if (currentId) fillModal(currentId);
  });
}
