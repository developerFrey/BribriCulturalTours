/**
 * Application entry point.
 *
 * Project layout
 * --------------
 *   config.ts          Contact links and site-wide constants
 *   i18n/              Language state + EN/ES UI dictionaries
 *   data/              Tour catalog (per language) and gallery media
 *   templates/         Pure functions returning the HTML of each section
 *   features/          Interactive behaviour (menu, filters, modal, gallery…)
 *   styles/            CSS split by section
 *
 * Boot sequence: render the static shell -> fill in translations ->
 * attach the interactive features.
 */
import './styles/index.css';

import { initExperiences } from './features/experiences';
import { initGallery } from './features/gallery';
import { initHeroVideo } from './features/heroVideo';
import { initLanguageToggle } from './features/language';
import { initMenu } from './features/menu';
import { initModal } from './features/modal';
import { initI18n } from './i18n';
import { appTemplate } from './templates/app';

const root = document.querySelector<HTMLDivElement>('#app');

if (root) {
  root.innerHTML = appTemplate();
  initI18n();

  initMenu();
  initLanguageToggle();
  initHeroVideo();
  initModal();
  initExperiences();
  initGallery();
}
