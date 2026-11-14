/**
 * Media shown in the Gallery view.
 * Captions are generated from the i18n dictionary at render time.
 */

export type GalleryMediaType = 'image' | 'video';

export interface GalleryItem {
  type: GalleryMediaType;
  src: string;
  /** Sequential number used in the caption ("Gallery image 07"). */
  number: number;
}

const IMAGE_DIR = './assets/images/';
const VIDEO_DIR = './assets/video/';

/** Photos: the numbered set (1–20) followed by the tour photos. */
const IMAGE_FILES = [
  ...Array.from({ length: 20 }, (_, index) => `${index + 1}.webp`),
  'awa experience.webp',
  'awaExperience.webp',
  'bribriCacaoImmersion.webp',
  'bribriCommunityImmersion.webp',
  'bribriRiver&CulturalImer.webp',
  'bribriRiverExp.webp',
  'cacao.webp',
  'cahuitaNationalPark.webp',
  'carribean bird watching2.webp',
  'carribeanBirdWatching.webp',
  'carribeanReefSnorkling.webp',
  'carribeanWildlifeExpedition.webp',
  'FarmTableCooking.webp',
  'gandocaLagoon.webp',
  'guide.webp',
  'jungle waterfall escape2.webp',
  'jungleImmersion.webp',
  'jungleNightWalk.webp',
  'jungleWaterfallEscape.webp',
  'kekoldi.webp',
  'manzanillo.webp',
  'punta mona.webp',
  'puntaMona.webp',
  'uvaKayak&Rainforest.webp',
];

/** Video files available in /public/assets/video (there is no 12.mp4). */
const VIDEO_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18];

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  ...IMAGE_FILES.map((file, index) => ({ type: 'image' as const, src: IMAGE_DIR + file, number: index + 1 })),
  ...VIDEO_NUMBERS.map((number) => ({ type: 'video' as const, src: `${VIDEO_DIR}${number}.mp4`, number })),
];
