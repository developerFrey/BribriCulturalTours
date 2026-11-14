/**
 * Assembles the whole page in reading order.
 * Each section lives in its own template file to keep things easy to find.
 */
import { experiencesSectionTemplate } from './experiences';
import { headerTemplate } from './header';
import { heroTemplate } from './hero';
import { contactTemplate, policiesTemplate, reviewsTemplate } from './info';
import { fieldNotesTemplate, guideTemplate } from './guide';
import { footerTemplate, galleryViewTemplate, modalTemplate, whatsappFloatTemplate } from './overlays';
import { aboutTemplate, introTemplate } from './story';

export const appTemplate = (): string => `
  ${headerTemplate()}

  <main class="site-main">
    ${heroTemplate()}
    ${experiencesSectionTemplate()}
    ${introTemplate()}
    ${aboutTemplate()}
    ${fieldNotesTemplate()}
    ${guideTemplate()}
    ${reviewsTemplate()}
    ${policiesTemplate()}
    ${contactTemplate()}
  </main>

  ${galleryViewTemplate()}
  ${footerTemplate()}
  ${modalTemplate()}
  ${whatsappFloatTemplate()}`;
