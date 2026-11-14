/**
 * "Field notes" video section and "Meet your guide" (Roberth).
 */
import { WHATSAPP_URL } from '../config';
import { en } from '../i18n/locales/en';
import { EXTERNAL, arrow, repeat, text } from './helpers';

export const fieldNotesTemplate = (): string => `
  <section class="field-notes page-width">
    <div class="field-notes__copy">
      ${text('fieldNotes.eyebrow', 'span', 'eyebrow')}
      ${text('fieldNotes.title', 'h2')}
      ${text('fieldNotes.text', 'p')}
    </div>

    <div class="field-notes__media">
      <video controls preload="metadata" poster="./assets/images/fieldNotesPoster.webp">
        <source src="./assets/video/2.mp4" type="video/mp4" />
        ${text('fieldNotes.videoFallback')}
      </video>
      ${text('fieldNotes.caption')}
    </div>
  </section>`;

export const guideTemplate = (): string => `
  <section class="guide page-width" id="guia">
    <div class="guide__image">
      <img src="./assets/images/guide.webp" alt="" width="853" height="1280" loading="lazy" decoding="async" data-i18n-attr="alt:guide.imageAlt" />
    </div>

    <div class="guide__content">
      ${text('guide.eyebrow', 'span', 'eyebrow')}
      ${text('guide.title', 'h2')}
      ${repeat(en.guide.paragraphs.length, (i) => text(`guide.paragraphs.${i}`, 'p'))}

      <p class="guide__closing">
        ${text('guide.closing', 'strong')}<br />
        <span>SIBÖ BÉ KÍMË</span>
      </p>

      <a class="text-link" href="${WHATSAPP_URL}" ${EXTERNAL}>${text('guide.cta')}${arrow()}</a>
    </div>
  </section>`;
