/**
 * Experience cards: rendering, category filters and the
 * "View all / Hide experiences" toggle.
 *
 * Cards are re-rendered whenever the language changes; the active filter
 * and expanded state are kept so the user doesn't lose their place.
 */
import { getExperiences } from '../data/experiences';
import { getLanguage, onLanguageChange, t } from '../i18n';
import { experienceCardTemplate } from '../templates/experiences';
import { $, $$ } from '../utils/dom';
import { openExperienceModal } from './modal';

const state = {
  /** 'all' or one of EXPERIENCE_CATEGORIES. */
  filter: 'all',
  /** When false only the first VISIBLE_EXPERIENCES cards are shown (CSS rule). */
  expanded: false,
};

let section: HTMLElement | null = null;
let grid: HTMLElement | null = null;
let toggleButton: HTMLButtonElement | null = null;

function renderCards(): void {
  if (!grid) return;
  grid.innerHTML = getExperiences(getLanguage()).map(experienceCardTemplate).join('');
  applyFilter();
}

/** Hides the cards that don't belong to the selected category. */
function applyFilter(): void {
  $$('.experience-card', grid ?? document).forEach((card) => {
    card.hidden = state.filter !== 'all' && card.dataset.category !== state.filter;
  });
  $$<HTMLButtonElement>('[data-experience-filter]').forEach((button) => {
    const isActive = button.dataset.experienceFilter === state.filter;
    button.classList.toggle('experience-filter--active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function setExpanded(expanded: boolean): void {
  state.expanded = expanded;
  section?.classList.toggle('experiences--expanded', expanded);
  toggleButton?.setAttribute('aria-expanded', String(expanded));
  updateToggleLabel();
}

function updateToggleLabel(): void {
  const label = $('[data-experiences-toggle-label]', toggleButton ?? document);
  if (label) label.textContent = t(state.expanded ? 'experiences.hideAll' : 'experiences.viewAll');
}

export function initExperiences(): void {
  section = $('.experiences');
  grid = $('[data-experience-grid]');
  toggleButton = $<HTMLButtonElement>('.experiences-toggle');
  if (!section || !grid) return;

  // Filters: selecting a category reveals every matching card.
  $$<HTMLButtonElement>('[data-experience-filter]').forEach((button) =>
    button.addEventListener('click', () => {
      state.filter = button.dataset.experienceFilter ?? 'all';
      setExpanded(true);
      applyFilter();
    }),
  );

  toggleButton?.addEventListener('click', () => {
    setExpanded(!state.expanded);
    if (!state.expanded) section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // One delegated listener survives every re-render of the cards.
  grid.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>('.read-more');
    if (button?.dataset.experienceId) openExperienceModal(button.dataset.experienceId);
  });

  onLanguageChange(() => {
    renderCards();
    updateToggleLabel();
  });

  renderCards();
  setExpanded(false);
}
