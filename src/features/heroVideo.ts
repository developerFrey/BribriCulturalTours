/**
 * Hero background video: autoplays muted (required by browsers) and offers
 * a button to toggle the sound on/off.
 */
import { onLanguageChange, t } from '../i18n';
import { $ } from '../utils/dom';

export function initHeroVideo(): void {
  const video = $<HTMLVideoElement>('#hero-video');
  const button = $<HTMLButtonElement>('.video-mute-toggle');
  if (!video || !button) return;

  const icon = $('.video-mute-toggle__icon', button);

  /** Reflects the muted state on the button (icon, label and aria-pressed). */
  const syncButton = (): void => {
    button.setAttribute('aria-label', t(video.muted ? 'hero.unmute' : 'hero.mute'));
    button.setAttribute('aria-pressed', String(video.muted));
    if (icon) icon.textContent = video.muted ? '🔇' : '🔊';
  };

  video.volume = 0.5;
  video.muted = true;
  video.play().catch(() => {
    /* Autoplay can be blocked (e.g. data-saver); the poster frame stays visible. */
  });

  button.addEventListener('click', () => {
    video.muted = !video.muted;
    syncButton();
  });

  onLanguageChange(syncButton);
  syncButton();
}
