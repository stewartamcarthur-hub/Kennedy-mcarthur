/**
 * Curated Animal Health imagery — short, confirmed list.
 *
 * Strategy: rather than using a long list of Unsplash IDs that may drift
 * to unrelated photos, this file relies on a tight set of well-known,
 * high-confidence Unsplash photographs of cattle. Each image is used in
 * one specific section.
 *
 * To add your own licensed photography, drop files into /public/images/
 * and change the `src` to e.g. "/images/hero-cattle.jpg".
 */

export type CuratedImage = {
  id: string;
  src: string;
  alt: string;
  tone: "warm" | "cool" | "neutral";
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

/* ---------- Confirmed cattle photographs (3) ---------- */

export const pastoralCow: CuratedImage = {
  id: "pastoral-cow",
  src: u("1500595046743-cd271d694d30"),
  alt: "Brown cow at golden hour — the face of Animal Health.",
  tone: "warm",
};

export const cattleHerd: CuratedImage = {
  id: "cattle-herd",
  src: u("1444212477490-ca407925329e"),
  alt: "A herd of cattle on open ground.",
  tone: "warm",
};

export const sunsetCattle: CuratedImage = {
  id: "sunset-cattle",
  src: u("1455460284058-6f74dabd7333"),
  alt: "Cattle silhouettes at sunset.",
  tone: "warm",
};

/* ---------- Aliases used by other pages (One Health, About) ---------- */

export const oneHealthHero: CuratedImage = sunsetCattle;
export const aboutImage: CuratedImage = cattleHerd;
export const closingImage: CuratedImage = pastoralCow;
export const convictionImage: CuratedImage = sunsetCattle;
export const heroImage: CuratedImage = pastoralCow;

/* The One Health triptych keeps a 3-cell shape but rotates the same
 * confirmed photographs — better than introducing unverified ones.
 * The /one-health page provides the full editorial treatment for
 * the three pillars. */
export const oneHealthTriptych: CuratedImage[] = [
  pastoralCow,
  cattleHerd,
  sunsetCattle,
];

/* Solutions detail page uses one image per discipline. Until you supply
 * your own, all five share the same trusted photograph; the discipline
 * differentiation is carried by typography on that page. */
export const solutionImages = {
  executiveSearch: pastoralCow,
  pipelining: cattleHerd,
  mapping: sunsetCattle,
  onboarding: pastoralCow,
  boardforge: cattleHerd,
};

/* Backwards compatibility */
export const solutionsImage: CuratedImage = pastoralCow;
export const insightsImage: CuratedImage = cattleHerd;
