/**
 * Types shared by the experience (tour) catalog.
 */

/** Filter categories. Labels are translated in the i18n dictionaries. */
export const EXPERIENCE_CATEGORIES = ['culture', 'nature', 'adventure', 'sea', 'wildlife', 'food'] as const;
export type ExperienceCategory = (typeof EXPERIENCE_CATEGORIES)[number];

/** Stable identifiers that link language-independent data with translated copy. */
export type ExperienceId =
  | 'awa'
  | 'cacao'
  | 'community'
  | 'riverCultural'
  | 'jungleImmersion'
  | 'riverExperience'
  | 'farmToTable'
  | 'puntaUva'
  | 'snorkeling'
  | 'cahuita'
  | 'manzanillo'
  | 'puntaMona'
  | 'nightWalk'
  | 'wildlifeExpedition'
  | 'birdwatching'
  | 'waterfall'
  | 'gandoca'
  | 'kekoldi';

/** Everything that changes with the language. */
export interface ExperienceCopy {
  title: string;
  location: string;
  duration: string;
  /** Short teaser shown on the card. */
  description: string;
  price: string;
  /** Full HTML description shown in the "Read more" modal. */
  details: string;
}

/** Translated copy for every experience in one language. */
export type ExperienceCatalog = Record<ExperienceId, ExperienceCopy>;

/** A fully-resolved experience ready to be rendered. */
export interface Experience extends ExperienceCopy {
  id: ExperienceId;
  category: ExperienceCategory;
  image: string;
  /** Optional CSS object-position (e.g. 'center top') to choose the visible part of the photo. */
  imagePosition?: string;
}
