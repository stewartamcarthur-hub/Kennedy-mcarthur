import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { aboutImage } from "../lib/images";

export const metadata = {
  title: "About",
  description:
    "Kennedy McArthur is led by Joe Kennedy and Stewart McArthur — executive search and leadership advisors specializing in Animal Health and One Health.",
};

const partners = [
  {
    name: "Joe Kennedy",
    role: "Founder & Managing Partner",
    initials: "JK",
    bg: "bg-ink text-paper",
    bio: [
      "Joe Kennedy has spent over a decade building leadership teams at the most complex intersection of science and commerce: global Animal Health.",
      "A former number-one-ranked global performer in his previous firm, Joe has led senior mandates for the world’s largest pharmaceutical, vaccine, and veterinary organizations across Europe, North America, and Asia-Pacific. He served on the Senior Leadership Team that successfully navigated a private equity sale.",
      "He founded Kennedy McArthur on a single conviction: that the sectors sustaining life deserve executive search delivered with the same rigor as the science itself.",
    ],
  },
  {
    name: "Stewart McArthur",
    role: "Partner",
    initials: "SM",
    bg: "bg-[var(--color-forest)] text-paper",
    bio: [
      "Stewart McArthur brings nearly 20 years of experience to the executive search and talent industry, with a career spanning leadership roles at both regional and global levels.",
      "His background combines hands-on commercial delivery with board-level responsibility, providing a broad perspective on how people strategy directly drives business performance. Having been an integral part of early-stage startup journeys, he possesses a first-hand understanding of the unique challenges involved in scaling teams and sustaining a high-growth business.",
      "Today, Stewart partners with organizations seeking a trusted advisor to navigate senior hiring, leadership advisory, or interim needs with discretion and measurable impact.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A search firm built around <em className="text-[var(--color-forest)]">conviction</em>, not coverage.
          </>
        }
        intro="Kennedy McArthur was founded to bring scientific rigor to executive search at the intersection of human, animal, and environmental health."
      />

      {/* Lead image strip */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <figure className="km-image-frame aspect-[16/6] rounded-sm">
              <SmartImage
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-32 lg:space-y-44">
          {partners.map((p) => (
            <Reveal key={p.name}>
              <article className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                <div className="lg:col-span-4">
                  <div
                    className={[
                      "aspect-[4/5] w-full",
                      p.bg,
                      "relative overflow-hidden flex items-end p-8",
                    ].join(" ")}
                  >
                    <span className="absolute top-6 right-6 km-eyebrow tracking-[0.4em] opacity-60">
                      {p.role}
                    </span>
                    <span className="km-display text-[28vw] lg:text-[12vw] leading-[0.7]">
                      {p.initials}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <h2 className="km-display text-[clamp(2.5rem,5vw,4.5rem)]">
                    {p.name}
                  </h2>
                  <p className="km-eyebrow text-[var(--color-forest)] mt-4">{p.role}</p>
                  <div className="mt-10 space-y-6 text-lg lg:text-xl text-stone-700 leading-relaxed">
                    {p.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="bg-[var(--color-forest-deep)] text-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28 lg:py-40">
          <Reveal>
            <p className="km-eyebrow text-paper/60 mb-8">A founding principle</p>
            <p className="km-display text-[clamp(2rem,5vw,4.5rem)] max-w-5xl">
              Search delivered with the same{" "}
              <em className="text-[#a0c8b8]">rigor</em> as the science itself.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
