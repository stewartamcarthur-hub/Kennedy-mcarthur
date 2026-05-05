import Link from "next/link";
import Reveal from "./components/Reveal";
import ClientLogos from "./components/ClientLogos";
import SmartImage from "./components/SmartImage";
import HeroBackdrop from "./components/HeroBackdrop";
import Testimonials from "./components/Testimonials";
import { oneHealthTriptych, solutionsImage } from "./lib/images";

const solutions = [
  {
    num: "01",
    title: "Executive Search",
    href: "/solutions#executive-search",
    blurb:
      "Targeted, retained search for board appointments, C-suite, and senior leadership.",
    image: oneHealthTriptych[0],
  },
  {
    num: "02",
    title: "Talent Pipelining & Scouting",
    href: "/solutions#pipelining",
    blurb:
      "Proactive scouting aligned to your long-term value creation plans.",
    image: solutionsImage,
  },
  {
    num: "03",
    title: "Market Mapping & Competitor Intel",
    href: "/solutions#mapping",
    blurb:
      "Discrete, data-driven mapping across Europe, North America, and Asia-Pacific.",
    image: oneHealthTriptych[2],
  },
  {
    num: "04",
    title: "Onboarding & Retention Advisory",
    href: "/solutions#onboarding",
    blurb:
      "Senior placements that integrate and create lasting value from day one.",
    image: oneHealthTriptych[1],
  },
  {
    num: "05",
    title: "BoardForge Architecture",
    href: "/solutions#boardforge",
    blurb:
      "A data-driven methodology underpinning human capital strategy at scale.",
    image: oneHealthTriptych[0],
  },
];

const stats = [
  { num: "20+", label: "Years across executive search & talent" },
  { num: "1,000s", label: "STEM hires delivered globally" },
  { num: "3", label: "Continents — EMEA, North America, APAC" },
  { num: "1", label: "Mandate: leadership for life-sustaining sectors" },
];

export default function Home() {
  return (
    <>
      {/* ---------------- HERO — full-bleed cinematic ---------------- */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-end overflow-hidden">
        <HeroBackdrop />

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
              <span className="km-eyebrow text-[var(--color-forest)]">
                People First · Technology Forward · Planetary Impact
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="km-display mt-8 lg:mt-12 text-[clamp(3rem,9vw,10rem)] text-ink max-w-[15ch]">
              Animal &amp;{" "}
              <em className="text-[var(--color-forest)]">One Health</em>{" "}
              Executive Search.
            </h1>
          </Reveal>

          <div className="mt-12 lg:mt-14 grid lg:grid-cols-12 gap-10 items-end">
            <Reveal delay={220} className="lg:col-span-7">
              <p className="text-xl lg:text-2xl text-stone-800 leading-snug max-w-2xl">
                Executive search and leadership advisory at the nexus of
                planetary health — built on the conviction that the sectors
                sustaining life deserve the same rigor as the science itself.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              className="lg:col-span-4 lg:col-start-9 lg:justify-self-end"
            >
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <a
                  href="mailto:info@kennedymcarthur.com"
                  className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 rounded-full text-sm font-medium hover:bg-[var(--color-forest)] transition-colors"
                >
                  Get in touch
                  <span aria-hidden>↗</span>
                </a>
                <Link href="/solutions" className="km-link text-sm text-ink">
                  Explore Solutions
                  <span aria-hidden className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Caption strip at bottom */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-stone-200/40 bg-paper/40 backdrop-blur-md">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-4 flex justify-between items-center text-xs text-stone-700 tracking-[0.32em] uppercase">
            <span>Est. 2026 — London · Glasgow</span>
            <span className="hidden sm:flex items-center gap-3">
              Scroll <span className="block w-8 h-px bg-stone-500" />
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- PULL QUOTE — replaces the old black slab ---------------- */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
              <span className="km-eyebrow text-[var(--color-forest)]">
                Our Conviction
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-9">
            <p className="km-display text-[clamp(1.75rem,3.6vw,3.4rem)] text-ink">
              We were founded on a single conviction: the sectors{" "}
              <em className="text-[var(--color-forest)]">sustaining life</em>{" "}
              deserve executive search delivered with the same rigor as the
              science itself.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="border-t border-stone-200" />
        </div>
      </section>

      {/* ---------------- STATS / PROOF POINTS ---------------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-20 lg:pb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 100}
                className="bg-paper p-8 lg:p-10"
              >
                <div className="km-display text-[clamp(2.75rem,6vw,5.5rem)] text-[var(--color-forest)] leading-[0.85]">
                  {s.num}
                </div>
                <p className="mt-4 text-sm text-stone-600 leading-snug">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TRUSTED BY ---------------- */}
      <ClientLogos />

      {/* ---------------- SOLUTIONS — visual cards instead of slab list ---------------- */}
      <section className="py-24 lg:py-36 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
            <Reveal className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
                <span className="km-eyebrow text-[var(--color-forest)]">
                  Solutions
                </span>
              </div>
              <h2 className="km-display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
                Five disciplines.{" "}
                <em className="text-[var(--color-forest)]">One mandate.</em>
              </h2>
            </Reveal>

            <Reveal
              delay={120}
              className="lg:col-span-4 lg:col-start-9 self-end"
            >
              <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
                Generic agencies map roles. We map ecosystems — pairing
                deep-domain intelligence with the discipline of a long-term
                value-creation plan.
              </p>
              <Link href="/solutions" className="km-link mt-6 text-ink">
                See all solutions
                <span aria-hidden className="arrow">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((s, i) => (
              <Reveal key={s.num} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group block relative overflow-hidden rounded-sm bg-stone-100 aspect-[4/5]"
                >
                  <div className="absolute inset-0">
                    <SmartImage
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/85" />
                  <div className="relative z-10 h-full p-7 lg:p-8 flex flex-col justify-between text-paper">
                    <span className="km-eyebrow opacity-80">{s.num}</span>
                    <div>
                      <h3 className="km-display text-[clamp(1.5rem,2.4vw,2.1rem)]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm lg:text-base text-paper/85 leading-relaxed max-w-md">
                        {s.blurb}
                      </p>
                      <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <span
                          aria-hidden
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ONE HEALTH — image-led ---------------- */}
      <section className="bg-[var(--color-forest-soft)] border-t border-stone-200">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <Reveal className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
                <span className="km-eyebrow text-[var(--color-forest)]">
                  The Nexus
                </span>
              </div>
              <h2 className="km-display mt-6 text-[clamp(2rem,4.5vw,4rem)]">
                The{" "}
                <em className="text-[var(--color-forest)]">health</em>{" "}
                of animals, humans, and our environment{" "}
                <span className="text-stone-500">are inseparable.</span>
              </h2>
              <Link href="/one-health" className="km-link mt-8 text-ink">
                Read about One Health
                <span aria-hidden className="arrow">→</span>
              </Link>
            </Reveal>

            <Reveal
              delay={140}
              className="lg:col-span-6 lg:col-start-7 grid sm:grid-cols-3 gap-3 lg:gap-4"
            >
              {oneHealthTriptych.map((img, i) => (
                <figure
                  key={img.id}
                  className="km-image-frame aspect-[3/4] rounded-sm group"
                >
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, 30vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-3 left-3 z-10 text-paper">
                    <span className="km-eyebrow opacity-80 text-[10px]">
                      {`0${i + 1}`}
                    </span>
                    <span className="block km-display text-xl mt-1">
                      {["Animal", "Human", "Planetary"][i]}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <Testimonials
        eyebrow="What clients say"
        title={
          <>
            Trusted by leaders across{" "}
            <em className="text-[var(--color-forest)]">Animal Health</em>,{" "}
            sustainability, and life sciences.
          </>
        }
      />

      {/* ---------------- CLOSING — image-led, no slab ---------------- */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <p className="km-eyebrow text-[var(--color-forest)] mb-5">
              Begin a conversation
            </p>
            <h2 className="km-display text-[clamp(2.25rem,5vw,4.25rem)]">
              Hire the leaders{" "}
              <em className="text-[var(--color-forest)]">your future requires.</em>
            </h2>
            <p className="mt-8 text-lg text-stone-600 max-w-xl leading-relaxed">
              Every brief is read by a partner. Tell us the seat, the
              timeframe, and what success looks like — we&rsquo;ll come back to
              you within two business days.
            </p>
            <a
              href="mailto:info@kennedymcarthur.com"
              className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 rounded-full text-base font-medium mt-10 hover:bg-[var(--color-forest)] transition-colors"
            >
              info@kennedymcarthur.com <span aria-hidden>↗</span>
            </a>
          </Reveal>

          <Reveal
            delay={140}
            className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2"
          >
            <figure className="km-image-frame aspect-[4/5] rounded-sm">
              <SmartImage
                src={solutionsImage.src}
                alt={solutionsImage.alt}
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}
