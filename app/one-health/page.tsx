import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { oneHealthTriptych, oneHealthHero } from "../lib/images";

export const metadata = {
  title: "One Health",
  description:
    "The Nexus of Planetary Health. The health of animals, humans, and our environment are inseparable — Kennedy McArthur operates at the intersection of these ecosystems.",
};

const pillars = [
  {
    num: "I",
    eyebrow: "The Interconnected World",
    title: "One ecosystem, three publics.",
    body:
      "The health of animals, humans, and our environment are inseparable. We operate at the intersection of these ecosystems, building leadership teams whose mandate spans the boundary between scientific stewardship and commercial discipline.",
    image: oneHealthTriptych[0],
    label: "Animal",
  },
  {
    num: "II",
    eyebrow: "Specialist Focus",
    title: "Deep-domain depth, global reach.",
    body:
      "Our reach is global, but our core expertise lies within the specialized Animal Health and One Health sectors — providing a depth of network and intelligence that generic agencies cannot match.",
    image: oneHealthTriptych[1],
    label: "Human",
  },
  {
    num: "III",
    eyebrow: "Cross-Sector Innovation",
    title: "Translation between adjacent sciences.",
    body:
      "We leverage talent pipelines from human life sciences, pharmaceuticals, and agricultural technology to bring progressive commercial leadership into the Animal Health space — and vice versa.",
    image: oneHealthTriptych[2],
    label: "Planetary",
  },
];

export default function OneHealthPage() {
  return (
    <>
      <PageHero
        eyebrow="One Health"
        title={
          <>
            The nexus of <em className="text-[var(--color-forest)]">planetary</em> health.
          </>
        }
        intro="Animal Health, Human Pharma, AgTech, and environmental science are no longer parallel disciplines. Kennedy McArthur builds the leadership teams that work across them."
      />

      {/* Wide hero image */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 -mt-2">
          <Reveal>
            <figure className="km-image-frame aspect-[16/7] rounded-sm">
              <SmartImage
                src={oneHealthHero.src}
                alt={oneHealthHero.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <figcaption className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10 text-paper">
                <span className="km-eyebrow opacity-80">A view from the field</span>
                <span className="block km-display text-3xl lg:text-5xl mt-3">
                  Where the science meets <em className="opacity-80">the soil.</em>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Pillars with images */}
      <section className="py-20 lg:py-32 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <ul className="space-y-28 lg:space-y-40">
            {pillars.map((p, idx) => (
              <Reveal as="li" key={p.num}>
                <article
                  className={[
                    "grid lg:grid-cols-12 gap-10 lg:gap-12 items-center",
                    idx % 2 === 1 ? "lg:[direction:rtl]" : "",
                  ].join(" ")}
                >
                  <div className="lg:col-span-5 lg:[direction:ltr]">
                    <figure className="km-image-frame aspect-[4/5] rounded-sm group">
                      <SmartImage
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                      <figcaption className="absolute bottom-5 left-5 z-10 text-paper">
                        <span className="km-eyebrow opacity-80">{p.num}</span>
                        <span className="block km-display text-4xl mt-2">{p.label}</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 lg:[direction:ltr]">
                    <p className="km-eyebrow text-[var(--color-forest)] mb-5">{p.eyebrow}</p>
                    <h2 className="km-display text-[clamp(2rem,4vw,3.25rem)]">
                      {p.title}
                    </h2>
                    <p className="mt-8 text-lg lg:text-xl text-stone-700 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[var(--color-forest-deep)] text-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28 lg:py-40 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="km-rule text-paper/60" />
              <span className="km-eyebrow text-paper/60">Mandate</span>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-9">
            <p className="km-display text-[clamp(2rem,5vw,4.5rem)] text-paper">
              Three publics.{" "}
              <em className="text-[#a0c8b8]">One mandate.</em>
              <br />
              Leadership that crosses the boundary.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
