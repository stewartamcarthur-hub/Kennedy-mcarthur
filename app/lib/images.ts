/**
 * Curated Animal Health & One Health imagery.
 *
 * Source: Unsplash (free for commercial use under the Unsplash License).
 * Replace any image by editing the `src` to a different Unsplash photo URL,
 * or move them to /public and reference by path. Credit attribution is
 * encouraged though not required.
 *
 * URL format: images.unsplash.com/photo-{id}?... query params control size,
 * format, and quality. We omit width/quality params here and let next/image
 * generate the responsive variants.
 */

export type CuratedImage = {
  id: string;
  src: string;
  alt: string;
  credit: { name: string; url: string };
  tone: "warm" | "cool" | "neutral";
};

export const heroImage: CuratedImage = {
  id: "hero-cattle-pasture",
  src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80",
  alt: "Cattle on open pasture at golden hour — a portrait of the Animal Health sector at scale.",
  credit: { name: "Stijn te Strake", url: "https://unsplash.com/@stijntestrake" },
  tone: "warm",
};

export const oneHealthTriptych: CuratedImage[] = [
  {
    id: "one-health-animal",
    src: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80",
    alt: "Herd of cattle — the Animal pillar of One Health.",
    credit: { name: "Stijn te Strake", url: "https://unsplash.com/" },
    tone: "warm",
  },
  {
    id: "one-health-human",
    src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80",
    alt: "Clinical research environment — the Human pillar of One Health.",
    credit: { name: "Unsplash", url: "https://unsplash.com/" },
    tone: "cool",
  },
  {
    id: "one-health-planet",
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
    alt: "Cultivated landscape — the Planetary pillar of One Health.",
    credit: { name: "Federico Respini", url: "https://unsplash.com/" },
    tone: "neutral",
  },
];

export const aboutImage: CuratedImage = {
  id: "about-veterinary",
  src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80",
  alt: "Veterinary practice — leadership at the bench and in the boardroom.",
  credit: { name: "Unsplash", url: "https://unsplash.com/" },
  tone: "neutral",
};

export const solutionsImage: CuratedImage = {
  id: "solutions-horse",
  src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80",
  alt: "Equine portrait — precision in stewardship.",
  credit: { name: "Unsplash", url: "https://unsplash.com/" },
  tone: "warm",
};

export const insightsImage: CuratedImage = {
  id: "insights-microscope",
  src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
  alt: "Lab microscope — at the intersection of science and capital.",
  credit: { name: "Unsplash", url: "https://unsplash.com/" },
  tone: "cool",
};
