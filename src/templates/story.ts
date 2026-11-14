/**
 * Storytelling sections: "The journey starts here" intro and "About us".
 */
import { WHATSAPP_URL } from '../config';
import { en } from '../i18n/locales/en';
import { EXTERNAL, arrow, repeat, text } from './helpers';

export const introTemplate = (): string => `
  <section class="intro page-width" id="nuestra-raiz">
    <div class="section-label"><span>01</span>${text('intro.label')}</div>

    <div class="intro__grid">
      <div>${text('intro.title', 'h2')}</div>
      <div class="intro__copy">
        ${text('intro.copy', 'p')}
        <a class="text-link" href="${WHATSAPP_URL}" ${EXTERNAL}>${text('intro.link')}${arrow()}</a>
      </div>
    </div>

    <div class="values">
      ${repeat(
        en.intro.values.length,
        (i) => `
        <div>
          <span>0${i + 1}</span>
          ${text(`intro.values.${i}.title`, 'strong')}
          ${text(`intro.values.${i}.text`, 'p')}
        </div>`,
      )}
    </div>
  </section>`;

/** "About us" — copy supplied by the client (see i18n.about). */
export const aboutTemplate = (): string => `
  <section class="statement" id="about-us">
    <div class="statement__image"></div>

    <div class="statement__content">
      <div class="statement__title">
        ${text('about.eyebrow', 'span', 'eyebrow')}
        ${text('about.title', 'h2')}
      </div>

      <div class="statement__copy">
        ${repeat(en.about.paragraphs.length, (i) => text(`about.paragraphs.${i}`, 'p'))}
        ${text('about.tagline', 'p')}
        <p>SIBÖ BÉ KÍMË</p>

        <a class="button button--light" href="${WHATSAPP_URL}" ${EXTERNAL}>${text('about.cta')}${arrow()}</a>
      </div>
    </div>
  </section>`;
