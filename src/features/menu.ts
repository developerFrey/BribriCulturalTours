/**
 * Mobile navigation menu (hamburger).
 * Closes when a link is chosen or when the user taps outside of it.
 */
import { $ } from '../utils/dom';

let nav: HTMLElement | null = null;
let toggle: HTMLButtonElement | null = null;

/** Closes the mobile menu (safe to call from other modules). */
export function closeMenu(): void {
  nav?.classList.remove('site-nav--open');
  toggle?.setAttribute('aria-expanded', 'false');
}

export function initMenu(): void {
  nav = $('.site-nav');
  toggle = $<HTMLButtonElement>('.menu-toggle');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav!.classList.toggle('site-nav--open');
    toggle!.setAttribute('aria-expanded', String(isOpen));
  });

  // Any link inside the menu closes it (the language button keeps it open).
  nav.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) closeMenu();
  });

  document.addEventListener('pointerdown', (event) => {
    const target = event.target as Node;
    if (nav!.classList.contains('site-nav--open') && !nav!.contains(target) && !toggle!.contains(target)) closeMenu();
  });
}
