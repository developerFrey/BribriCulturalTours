/**
 * Experience (tour) catalog.
 *
 * Language-independent data (id, category, photo) is declared once here and
 * merged with the translated copy from `en.ts` / `es.ts` on demand.
 * To add a tour: add its id to `ExperienceId`, an entry below, and its copy
 * in both language files (TypeScript will flag anything missing).
 */
import type { Language } from '../../i18n';
import { enExperiences } from './en';
import { esExperiences } from './es';
import type { Experience, ExperienceCatalog } from './types';

export * from './types';

const IMAGE_DIR = './assets/images/';

/** Display order of the cards. The first `VISIBLE_EXPERIENCES` are shown by default. */
const EXPERIENCE_BASE: ReadonlyArray<Pick<Experience, 'id' | 'category' | 'image' | 'imagePosition'>> = [
  { id: 'awa', category: 'culture', image: 'awaExperience.webp' },
  { id: 'cacao', category: 'culture', image: 'bribriCacaoImmersion.webp' },
  { id: 'community', category: 'culture', image: 'bribriCommunityImmersion.webp' },
  { id: 'riverCultural', category: 'culture', image: 'bribriRiver&CulturalImer.webp' },
  { id: 'jungleImmersion', category: 'adventure', image: 'jungleImmersion.webp' },
  { id: 'riverExperience', category: 'nature', image: 'bribriRiverExp.webp' },
  { id: 'farmToTable', category: 'food', image: 'FarmTableCooking.webp' },
  { id: 'puntaUva', category: 'adventure', image: 'uvaKayak&Rainforest.webp' },
  { id: 'snorkeling', category: 'sea', image: 'carribeanReefSnorkling.webp' },
  { id: 'cahuita', category: 'nature', image: 'cahuitaNationalPark.webp' },
  { id: 'manzanillo', category: 'sea', image: 'manzanillo.webp' },
  { id: 'puntaMona', category: 'adventure', image: 'punta mona.webp' },
  { id: 'nightWalk', category: 'wildlife', image: 'jungleNightWalk.webp' },
  { id: 'wildlifeExpedition', category: 'wildlife', image: 'carribeanWildlifeExpedition.webp' },
  { id: 'birdwatching', category: 'wildlife', image: 'carribeanBirdWatching.webp' },
  { id: 'waterfall', category: 'nature', image: 'jungleWaterfallEscape.webp' },
  { id: 'gandoca', category: 'nature', image: 'gandocaLagoon.webp' },
  { id: 'kekoldi', category: 'adventure', image: 'kekoldi.webp' },
];

const catalogs: Record<Language, ExperienceCatalog> = { en: enExperiences, es: esExperiences };

/** Returns the full, translated list of experiences in display order. */
export function getExperiences(language: Language): Experience[] {
  return EXPERIENCE_BASE.map((base) => ({
    ...base,
    image: IMAGE_DIR + base.image,
    ...catalogs[language][base.id],
  }));
}

/** Looks up a single translated experience by id. */
export function getExperience(language: Language, id: string): Experience | undefined {
  return getExperiences(language).find((experience) => experience.id === id);
}
