/**
 * Informational sections: Google reviews, booking policies and contact.
 */
import { CATALOG_URL, GOOGLE_REVIEWS_URL, REVIEWS_WIDGET_CLASS, WHATSAPP_URL } from '../config';
import { en } from '../i18n/locales/en';
import { EXTERNAL, arrow, repeat, text } from './helpers';

/**
 * The BlooTrue script (index.html) finds `.${REVIEWS_WIDGET_CLASS}` and injects
 * the reviews. This node is never re-rendered so the widget is not lost.
 */
export const reviewsTemplate = (): string => `
  <section class="reviews" aria-labelledby="reviews-title">
    <div class="page-width reviews__heading">
      ${text('reviews.eyebrow', 'span', 'eyebrow')}
      <h2 id="reviews-title" data-i18n="reviews.title"></h2>
      <a class="text-link" href="${GOOGLE_REVIEWS_URL}" ${EXTERNAL}>${text('reviews.link')}${arrow()}</a>
    </div>

    <div class="page-width reviews__widget">
      <div class="${REVIEWS_WIDGET_CLASS}">
        <noscript><a href="https://www.blootrue.com/widgets/google?utm_source=widget&amp;utm_medium=embed&amp;utm_campaign=powered_by" rel="nofollow noopener" target="_blank">Powered by BlooTrue</a></noscript>
      </div>
    </div>
  </section>`;

/** Accordion of policies; the first one starts open. */
export const policiesTemplate = (): string => `
  <section class="policies page-width" id="politicas">
    <div class="policies__heading">
      ${text('policies.eyebrow', 'span', 'eyebrow')}
      ${text('policies.title', 'h2')}
      ${text('policies.intro', 'p')}
    </div>

    <div class="policies__list">
      ${repeat(
        en.policies.items.length,
        (i) => `
        <details${i === 0 ? ' open' : ''}>
          ${text(`policies.items.${i}.title`, 'summary')}
          ${text(`policies.items.${i}.body`, 'div', 'policies__body')}
        </details>`,
      )}
    </div>
  </section>`;

export const contactTemplate = (): string => `
  <section class="contact" id="contacto">
    <div class="page-width contact__grid">
      <div>
        ${text('contact.eyebrow', 'span', 'eyebrow')}
        ${text('contact.title', 'h2')}
      </div>

      <div>
        ${text('contact.text', 'p')}
        <a class="button button--light" href="${WHATSAPP_URL}" ${EXTERNAL}>${text('contact.whatsapp')}${arrow()}</a>

        <a class="catalog-download" href="${CATALOG_URL}" download>
          <span class="catalog-download__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><path d="M6 2.5h8l4 4V21.5H6zM14 2.5v4h4M8.5 12h7M8.5 15h7M8.5 18h4" /></svg>
            <b>PDF</b>
          </span>
          ${text('contact.catalog', 'span', 'catalog-download__label')}
          <span class="catalog-download__action" aria-hidden="true">↓</span>
        </a>

        ${text('contact.instagram', 'p', 'contact__small')}
      </div>
    </div>
  </section>`;
