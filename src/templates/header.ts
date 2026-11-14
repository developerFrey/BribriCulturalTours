/**
 * Site header: logo, main navigation, "Plan your trip" CTA and the
 * EN / ES language switcher (placed right after the CTA).
 */
import { WHATSAPP_URL } from '../config';
import { EXTERNAL, arrow, text } from './helpers';

export const headerTemplate = (): string => `
  <header class="site-header">
    <a class="brand" href="#home" data-i18n-attr="aria-label:nav.home">
      <img src="./assets/bribriLogo.webp" alt="" class="brand__icon" aria-hidden="true" width="48" height="48" />
      <span><strong>Bribri</strong><em> Cultural Tours</em></span>
    </a>

    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-i18n-attr="aria-label:nav.openMenu">
      <span></span><span></span>${text('nav.menu', 'small')}
    </button>

    <nav id="site-nav" class="site-nav" data-i18n-attr="aria-label:nav.main">
      <a class="nav-link" href="#experiencias" data-i18n="nav.experiences"></a>
      <a class="nav-link" href="#about-us" data-i18n="nav.about"></a>
      <a class="nav-link" href="#gallery" data-gallery-open data-i18n="nav.gallery"></a>
      <a class="nav-link" href="#politicas" data-i18n="nav.policies"></a>
      <a class="nav-link" href="#contacto" data-i18n="nav.contact"></a>
      <a class="nav-link nav-link--cta" href="${WHATSAPP_URL}" ${EXTERNAL}>${text('nav.planTrip')}${arrow()}</a>

      <!-- Language switcher: the active language is highlighted by features/language.ts -->
      <button class="nav-link language-toggle" type="button" data-language-toggle data-i18n-attr="aria-label:nav.switchLanguage">
        <span class="language-toggle__option" data-language-option="en">EN</span>
        <span class="language-toggle__divider" aria-hidden="true">/</span>
        <span class="language-toggle__option" data-language-option="es">ES</span>
      </button>
    </nav>
  </header>`;
