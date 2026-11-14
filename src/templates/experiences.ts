/**
 * "Experiences" section: heading, category filters, card grid and the
 * "View all" toggle. Cards are rendered (and re-rendered on language change)
 * by features/experiences.ts using `experienceCardTemplate`.
 */
import { VISIBLE_EXPERIENCES } from '../config';
import { EXPERIENCE_CATEGORIES, type Experience } from '../data/experiences';
import { t } from '../i18n';
import { escapeAttribute, toPlainText } from '../utils/dom';
import { arrow, text } from './helpers';

/** Number of colour themes defined in styles/experiences.css (.experience-card--color-N). */
const CARD_THEMES = 6;

export const experiencesSectionTemplate = (): string => `
  <section class="experiences" id="experiencias">
    <div class="page-width">
      <div class="section-heading">
        <div>${text('experiences.eyebrow', 'span', 'eyebrow')}${text('experiences.title', 'h2')}</div>
        ${text('experiences.intro', 'p')}
      </div>

      <div class="experience-filters" role="group" data-i18n-attr="aria-label:experiences.filtersLabel">
        ${['all', ...EXPERIENCE_CATEGORIES]
          .map(
            (category) => `
          <button class="experience-filter${category === 'all' ? ' experience-filter--active' : ''}" type="button"
            data-experience-filter="${category}" aria-pressed="${category === 'all'}"
            data-i18n="experiences.categories.${category}"></button>`,
          )
          .join('')}
      </div>

      <div class="experience-grid" data-experience-grid></div>

      <button class="button button--dark experiences-toggle" type="button" aria-expanded="false">
        <span data-experiences-toggle-label></span>${arrow()}
      </button>
    </div>
  </section>`;

/**
 * One tour card.
 *
 * Image handling: every photo fills the same 3:4 frame (object-fit: cover),
 * so all cards look identical. To choose which part of a photo stays
 * visible, set `imagePosition` on that tour in data/experiences/index.ts.
 *
 * Layout: price + "Read more" live together in `.experience-card__footer`,
 * which is pushed to the bottom of the card so prices line up across a row.
 */
export const experienceCardTemplate = (experience: Experience, index: number): string => {
  const isAboveTheFold = index < VISIBLE_EXPERIENCES;
  const src = escapeAttribute(experience.image);
  const alt = escapeAttribute(toPlainText(experience.title));

  return `
    <article class="experience-card experience-card--color-${index % CARD_THEMES}" data-experience-id="${experience.id}" data-category="${experience.category}">
      <div class="experience-card__media">
        <img class="experience-card__image" src="${src}" alt="${alt}"${experience.imagePosition ? ` style="object-position: ${experience.imagePosition}"` : ''}
          loading="${isAboveTheFold ? 'eager' : 'lazy'}" decoding="async"${isAboveTheFold ? ' fetchpriority="high"' : ''} />
      </div>

      <div class="experience-card__body">
        <span class="eyebrow">${t(`experiences.categories.${experience.category}`)}</span>
        <h3>${experience.title}</h3>
        <p>${experience.description}</p>
        <div class="experience-card__meta"><span>${experience.location}</span><span>${experience.duration}</span></div>

        <div class="experience-card__footer">
          <strong class="experience-card__price">${experience.price}</strong>
          <button class="read-more" type="button" data-experience-id="${experience.id}">
            ${t('experiences.readMore')}${arrow()}
          </button>
        </div>
      </div>
    </article>`;
};
