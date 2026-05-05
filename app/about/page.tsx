import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import Testimonials from "../components/Testimonials";
import { aboutImage } from "../lib/images";

export const metadata = {
  title: "About",
  description:
    "Kennedy McArthur is led by Joe Kennedy and Stewart McArthur — executive search and leadership advisors specializing in Animal Health and One Health.",
};

const partners = [
  {
    name: "Joe Kennedy",
    role: "Founding Partner",
    initials: "JK",
    bg: "bg-ink text-paper",
    bio: [
      "Joe Kennedy, Founding Partner of Kennedy McArthur and BoardForge, brings a unique focus to Animal Health and the One Health ecosystem. He is a proven executive search professional with extensive international experience spanning the functions of this segment — senior scientific, medical and veterinary, commercial, operational, and corporate.",
      "Before launching Kennedy McArthur, Joe served as Managing Director of Animal Health for WittKieffer, a top-ten global executive search firm. Prior to this he was Managing Director for a UK-based life sciences recruitment firm, where he excelled as a top performer and displayed a strong ability to forge trust-based relationships with clients and candidates. Joe led that organization’s efforts in Animal Health, ESG, and diversity, equity, and inclusion, and was part of the leadership team that sold the business to private equity backers.",
      "Prior to this he served as Executive Consultant at another global recruiting firm, focusing on Animal Health globally.",
      "His passion for the Animal Health space is rooted in his love for animals and the environment — a conviction that caring for the living ecosystems of the world, and its inhabitants, makes us more human.",
    ],
  },
  {
    name: "Stewart McArthur",
    role: "Founding Partner",
    initials: "SM",
    bg: "bg-[var(--color-forest)] text-paper",
    bio: [
      "Stewart McArthur brings nearly 20 years of experience to the executive search and talent industry, with a career spanning leadership roles at both regional and global levels. His background combines hands-on commercial delivery with board-level responsibility, providing a broad perspective on how people strategy directly drives business performance.",
      "Throughout his career, Stewart has worked closely with private equity investors and executive leadership teams to help organizations scale, restructure, and strengthen their talent functions. Having been an integral part of early-stage startup journeys, he possesses a first-hand understanding of the unique challenges involved in scaling teams and sustaining a high-growth business. He has overseen thousands of STEM hires, supporting critical projects worldwide and building long-term partnerships with clients in complex, regulated industries.",
      "Stewart’s approach is defined by a focus on delivering results with clarity, pace, and integrity. Whether advising at the board level, leading teams through organizational change, or executing senior search assignments, he maintains a consistent emphasis on aligning leadership and technical expertise with a business’s overarching strategic objectives.",
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

      {/* Testimonials */}
      <Testimonials
        eyebrow="Direct client feedback"
        title={
          <>
            Words from those who&rsquo;ve worked with us{" "}
            <em className="text-[var(--color-forest)]">first-hand.</em>
          </>
        }
        intro="Selected quotes from senior clients across Animal Health, sustainability, and regulated industries."
      />

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
