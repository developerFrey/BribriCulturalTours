/**
 * Gallery "page".
 *
 * The gallery replaces <main> and the footer while open. Its ~60 media items
 * are only inserted into the DOM when the gallery is opened (and removed when
 * it closes) so they never slow down the initial page load.
 */
import { GALLERY_ITEMS } from '../data/gallery';
import { onLanguageChange } from '../i18n';
import { galleryItemTemplate } from '../templates/overlays';
import { $, $$ } from '../utils/dom';
import { closeMenu } from './menu';

let view: HTMLElement | null = null;
let main: HTMLElement | null = null;
let footer: HTMLElement | null = null;
let content: HTMLElement | null = null;
let activeFilter = 'all';

const isOpen = (): boolean => !!view && !view.hidden;

function renderItems(): void {
  if (!content) return;
  content.innerHTML = GALLERY_ITEMS.map(galleryItemTemplate).join('');
  applyFilter();
}

function applyFilter(): void {
  $$('.gallery-item', content ?? document).forEach((item) => {
    item.hidden = activeFilter !== 'all' && item.dataset.galleryType !== activeFilter;
  });
  $$<HTMLButtonElement>('[data-gallery-filter]').forEach((button) =>
    button.classList.toggle('gallery-filter--active', button.dataset.galleryFilter === activeFilter),
  );
}

function openGallery(event?: Event): void {
  event?.preventDefault();
  closeMenu();
  if (!isOpen()) renderItems();

  main?.setAttribute('hidden', '');
  footer?.setAttribute('hidden', '');
  view?.removeAttribute('hidden');
  history.replaceState(null, '', '#gallery');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeGallery(): void {
  content?.replaceChildren(); // Frees images/videos from memory.
  view?.setAttribute('hidden', '');
  main?.removeAttribute('hidden');
  footer?.removeAttribute('hidden');
  history.replaceState(null, '', '#home');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/** Header links still work from inside the gallery: close it, then scroll to the section. */
function navigateFromGallery(event: Event): void {
  if (!isOpen()) return;
  const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
  if (!targetId?.startsWith('#') || targetId === '#gallery') return;

  event.preventDefault();
  closeGallery();
  requestAnimationFrame(() => $(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
}

export function initGallery(): void {
  view = $('.gallery-view');
  main = $('.site-main');
  footer = $('.site-footer');
  content = $('[data-gallery-content]');
  if (!view) return;

  $$('[data-gallery-open]').forEach((link) => link.addEventListener('click', openGallery));
  $$('[data-gallery-close]').forEach((button) => button.addEventListener('click', closeGallery));
  $$('.brand, .site-nav a:not([data-gallery-open])').forEach((link) => link.addEventListener('click', navigateFromGallery));

  $$<HTMLButtonElement>('[data-gallery-filter]').forEach((button) =>
    button.addEventListener('click', () => {
      activeFilter = button.dataset.galleryFilter ?? 'all';
      applyFilter();
    }),
  );

  // Refresh captions if the language changes while the gallery is open.
  onLanguageChange(() => {
    if (isOpen()) renderItems();
  });

  // Support deep links such as https://bribriculturaltours.com/#gallery
  if (location.hash === '#gallery') openGallery();
}
