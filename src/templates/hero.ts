/**
 * Full-screen hero with the background video and the mute toggle.
 */
import { arrow, text } from './helpers';

export const heroTemplate = (): string => `
  <section id="home" class="hero">
    <video id="hero-video" class="hero__video" autoplay muted loop playsinline preload="metadata">
      <source src="./assets/video/1.mp4" type="video/mp4" />
    </video>

    <!-- Label / icon are kept in sync with the video state by features/heroVideo.ts -->
    <button class="video-mute-toggle" type="button" aria-pressed="true">
      <span class="video-mute-toggle__icon" aria-hidden="true">🔇</span>
    </button>

    <div class="hero__content page-width">
      <h1>${text('hero.titleAccent', 'span', 'hero__title-accent')}<br />${text('hero.titleEmphasis', 'em')}</h1>
      ${text('hero.intro', 'p', 'hero__intro')}
      <a class="button button--light" href="#experiencias">${text('hero.cta')}${arrow('↓')}</a>
    </div>

    <div class="hero__note">${text('hero.note')}</div>
  </section>`;
