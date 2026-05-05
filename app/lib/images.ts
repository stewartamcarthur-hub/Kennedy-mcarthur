/**
 * Curated Animal Health & One Health imagery.
 *
 * Source: Unsplash (free for commercial use under the Unsplash License).
 *
 * Each image is used in ONE place only — no repeats across the homepage,
 * One Health page, About page, or Solutions detail. To swap any image, edit
 * its `src` to a different Unsplash photo URL or move it to /public/images/
 * and reference it by path. Credit attribution is encouraged though not
 * required by the Unsplash License.
 */

export type CuratedImage = {
  id: string;
  src: string;
  alt: string;
  credit?: { name: string; url: string };
  tone: "warm" | "cool" | "neutral";
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

/* ---------- Hero ---------- */

export const heroImage: CuratedImage = {
  id: "hero-cattle-portrait",
  src: u("1605557627260-87bb0a72b1d3"),
  alt:
    "Close portrait of a dairy cow at golden hour — the human face of Animal Health.",
  tone: "warm",
};

/* ---------- One Health triptych ---------- */

export const oneHealthTriptych: CuratedImage[] = [
  {
    id: "one-health-animal",
    src: u("1500595046743-cd271d694d30"),
    alt: "Cow gazing at camera in open pasture — the Animal pillar.",
    tone: "warm",
  },
  {
    id: "one-health-human",
    // Replaces the previous plastic-brain image.
    src: u("1576091160550-2173dba999ef"),
    alt:
      "Researcher at a microscope — the Human pillar of human and veterinary medicine.",
    tone: "cool",
  },
  {
    id: "one-health-planet",
    src: u("1625246333195-78d9c38ad449"),
    alt:
      "Aerial view of cultivated farmland — the Planetary pillar of food, water, and soil.",
    tone: "neutral",
  },
];

/* ---------- About lead ---------- */

export const aboutImage: CuratedImage = {
  id: "about-aerial-farmland",
  src: u("1530836369250-ef72a3f5cda8"),
  alt:
    "Aerial sweep over working farmland — the operating context for our mandates.",
  tone: "neutral",
};

/* ---------- Solutions: one distinct image per discipline ---------- */

export const solutionImages: Record<string, CuratedImage> = {
  executiveSearch: {
    id: "sol-executive-search",
    src: u("1582719188393-bb71ca45dbb9"),
    alt:
      "Veterinarian working with a horse — leadership at the bench, not just the boardroom.",
    tone: "warm",
  },
  pipelining: {
    id: "sol-pipelining",
    src: u("1532187863486-abf9dbad1b69"),
    alt:
      "Ordered crop rows — proactive pipelining built one row at a time.",
    tone: "neutral",
  },
  mapping: {
    id: "sol-mapping",
    src: u("1500382017468-9049fed747ef"),
    alt:
      "Aerial map of cultivated terrain — competitive intelligence as cartography.",
    tone: "neutral",
  },
  onboarding: {
    id: "sol-onboarding",
    src: u("1571115764595-644a1f56a55c"),
    alt:
      "Horses in a stable — onboarding as integration, not just arrival.",
    tone: "warm",
  },
  boardforge: {
    id: "sol-boardforge",
    src: u("1531297484001-80022131f5a1"),
    alt:
      "Architectural lattice — the structure beneath BoardForge.",
    tone: "cool",
  },
};

/* ---------- Other supporting images ---------- */

export const convictionImage: CuratedImage = {
  id: "conviction-flock",
  src: u("1572880017859-3d7ce92c4cae"),
  alt: "Flock at dusk — the sectors sustaining life.",
  tone: "warm",
};

export const oneHealthHero: CuratedImage = {
  id: "one-health-hero",
  src: u("1455460284058-6f74dabd7333"),
  alt:
    "Cattle silhouetted against a wide horizon — three publics under one sky.",
  tone: "warm",
};

export const closingImage: CuratedImage = {
  id: "closing-vet-cattle",
  src: u("1598974357801-cbca100e65d3"),
  alt:
    "Veterinarian with cattle — leadership applied where it matters.",
  tone: "warm",
};

export const insightsImage: CuratedImage = {
  id: "insights-laboratory",
  src: u("1578328819058-b69f3a3b0f6b"),
  alt:
    "Pipettes in a research laboratory — at the intersection of science and capital.",
  tone: "cool",
};

/* Backwards compat shim for any older imports */
export const solutionsImage: CuratedImage = solutionImages.executiveSearch;
