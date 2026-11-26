/**
 * Footer, gallery view, experience modal and floating WhatsApp button.
 */
import { SOCIAL_LINKS, WHATSAPP_URL } from '../config';
import type { GalleryItem } from '../data/gallery';
import { t } from '../i18n';
import { escapeAttribute, pad2 } from '../utils/dom';
import { EXTERNAL, arrow, text } from './helpers';

export const footerTemplate = (): string => `
  <footer class="footer site-footer">
    <div class="page-width footer__inner">
      <div class="footer__brand">
        <a class="brand brand--footer" href="#home">
          <img src="./assets/bribriLogo.webp" alt="" class="brand__icon" aria-hidden="true" width="48" height="48" loading="lazy" />
          <span><strong>Bribri</strong><em>Cultural Tours</em></span>
        </a>
        ${text('footer.tagline', 'p')}
      </div>

      <nav class="social-links" data-i18n-attr="aria-label:footer.social">
        ${SOCIAL_LINKS.map(
          (social) => `
          <a href="${social.url}" ${EXTERNAL} aria-label="${social.name}">
            <img src="${social.icon}" alt="" class="social-links__icon" aria-hidden="true" width="30" height="30" loading="lazy" />
          </a>`,
        ).join('')}
      </nav>

      <p class="footer__copyright">© ${new Date().getFullYear()} Bribri Cultural Tours</p>
    </div>
  </footer>`;

/** Gallery is a separate "page" that replaces <main> while open. */
export const galleryViewTemplate = (): string => `
  <section class="gallery-view" id="gallery" hidden aria-labelledby="gallery-title">
    <div class="page-width">
      <div class="gallery-view__heading">
        <div>
          ${text('gallery.eyebrow', 'span', 'eyebrow')}
          <h1 id="gallery-title" data-i18n="gallery.title"></h1>
        </div>
        <button class="button button--dark gallery-back" type="button" data-gallery-close>${text('gallery.back')}${arrow()}</button>
      </div>

      <div class="gallery-filters" role="group" data-i18n-attr="aria-label:gallery.filtersLabel">
        <button type="button" class="gallery-filter gallery-filter--active" data-gallery-filter="all" data-i18n="gallery.all"></button>
        <button type="button" class="gallery-filter" data-gallery-filter="image" data-i18n="gallery.images"></button>
        <button type="button" class="gallery-filter" data-gallery-filter="video" data-i18n="gallery.videos"></button>
      </div>

      <div class="gallery-grid" data-gallery-content></div>
    </div>
  </section>`;

/** One gallery tile; photos and videos fill the same frame as the tour cards. */
export const galleryItemTemplate = (item: GalleryItem): string => {
  const isVideo = item.type === 'video';
  const title = t(isVideo ? 'gallery.videoTitle' : 'gallery.photoTitle', { n: pad2(item.number) });
  const src = escapeAttribute(item.src);

  const media = isVideo
    ? `<video controls preload="metadata"><source src="${src}" type="video/mp4" /></video>`
    : `<img class="gallery-item__image" src="${src}" alt="${escapeAttribute(title)}" loading="lazy" decoding="async" />`;

  return `
    <article class="gallery-item" data-gallery-type="${item.type}">
      <div class="gallery-item__media">${media}</div>
      <div class="gallery-item__caption">
        <span>${t(isVideo ? 'gallery.video' : 'gallery.photo')}</span>
        <h3>${title}</h3>
        <p>${t(isVideo ? 'gallery.videoDescription' : 'gallery.photoDescription')}</p>
      </div>
    </article>`;
};

/** "Read more" dialog; its content is filled by features/modal.ts. */
export const modalTemplate = (): string => `
  <div class="experience-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
    <div class="experience-modal__backdrop" data-close-modal></div>
    <div class="experience-modal__panel">
      <button class="experience-modal__close" type="button" data-close-modal data-i18n-attr="aria-label:modal.close">×</button>
      <span class="eyebrow" data-modal="category"></span>
      <h2 id="modal-title" data-modal="title"></h2>
      <div class="experience-modal__description" data-modal="details"></div>
      <div class="experience-modal__meta">
        <span data-modal="location"></span>
        <span data-modal="duration"></span>
        <strong data-modal="price"></strong>
      </div>
      <a class="button button--dark" href="${WHATSAPP_URL}" data-modal-whatsapp ${EXTERNAL}>${text('modal.cta')}${arrow()}</a>
    </div>
  </div>`;

export const whatsappFloatTemplate = (): string => `
  <a class="whatsapp-float" href="${WHATSAPP_URL}" ${EXTERNAL} data-i18n-attr="aria-label:whatsapp.aria">
    <img src="./assets/Icons/whatsapp-icon.svg" alt="" class="whatsapp-float__icon" aria-hidden="true" width="22" height="22" />
    ${text('whatsapp.label', 'span', 'whatsapp-float__label')}
  </a>`;
