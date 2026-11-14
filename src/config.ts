/**
 * Site-wide constants.
 *
 * Every external link or contact detail lives here so it can be changed in a
 * single place instead of hunting through the templates.
 */

/** WhatsApp chat link used by every "book / plan / contact" call to action. */
export const WHATSAPP_URL = 'https://wa.me/50683647960';

/** Public Google reviews page. */
export const GOOGLE_REVIEWS_URL = 'https://share.google/V1qIqn1u5bqO3oFVG';

/** Downloadable PDF catalog (served from /public). */
export const CATALOG_URL = './Bribri_Cultural_Tours_OFFICIAL_CATALOG.pdf';

/** Social profiles shown in the footer. */
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/bobtikin.moradiaz', icon: './assets/Icons/facebook-icon.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/bribri_cultural_tours/', icon: './assets/Icons/instagram-icon.svg' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@roberth_moradiaz', icon: './assets/Icons/tiktok-icon.svg' },
] as const;

/** Id of the BlooTrue Google-reviews widget (script loaded in index.html). */
export const REVIEWS_WIDGET_CLASS = 'blootrue-widget-Xwt4XzqaJTlr';

/** Number of experience cards visible before "View all experiences" is pressed. */
export const VISIBLE_EXPERIENCES = 6;
