import Link from "next/link";
import Reveal from "./components/Reveal";
import ClientLogos from "./components/ClientLogos";
import SmartImage from "./components/SmartImage";
import Testimonials from "./components/Testimonials";
import AnimatedHeroScene from "./components/AnimatedHeroScene";
import { pastoralCow, cattleHerd } from "./lib/images";

const solutions = [
  {
    num: "01",
    title: "Executive Search",
    href: "/solutions#executive-search",
    blurb:
      "Targeted, retained search for board, C-suite, and senior leadership.",
    detail:
      "Deep industry intelligence to identify talent that fits your future, not just your past.",
  },
  {
    num: "02",
    title: "Talent Pipelining & Scouting",
    href: "/solutions#pipelining",
    blurb:
      "Proactive scouting aligned with long-term value creation plans.",
    detail:
      "Avoid 'shopping while hungry' — regular intelligence briefings at a cadence that suits you.",
  },
  {
    num: "03",
    title: "Market Mapping & Competitor Intel",
    href: "/solutions#mapping",
    blurb:
      "Discrete, data-driven mapping across EMEA, North America, and APAC.",
    detail:
      "Structural mapping built around the questions your leadership team needs answered.",
  },
  {
    num: "04",
    title: "Onboarding & Retention",
    href: "/solutions#onboarding",
    blurb:
      "Senior placements integrated to create lasting value from day one.",
    detail:
      "We work with new appointees and their boards through the first 18 months.",
  },
  {
    num: "05",
    title: "BoardForge Architecture",
    href: "/solutions#boardforge",
    blurb:
      "A data-driven methodology underpinning human capital strategy.",
    detail:
      "Composition, capability, succession, governance — modelled to your value plan.",
  },
];

const pillars = [
  { num: "I", label: "Animal", line: "Veterinary, livestock, companion." },
  { num: "II", label: "Human", line: "Pharma, biotech, public health." },
  { num: "III", label: "Planetary", line: "Agritech, ecology, climate." },
];

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────
         HERO — full-bleed animated illustration, no stock photo
      ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] lg:min-h-[94vh] flex items-end overflow-hidden bg-[#1a2a20]">
        {/* Animated mountain + cattle scene */}
        <AnimatedHeroScene />

        {/* Subtle dimming for legibility — anchored to bottom-left where text sits */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, transparent 45%, rgba(15,30,22,0.45) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,30,22,0.55) 0%, rgba(15,30,22,0.18) 45%, transparent 70%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 km-grain" />

        {/* Foreground content */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-32 pb-24 lg:pt-44 lg:pb-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="inline-block w-9 h-px bg-[#f5e9c8]/80" />
              <span className="km-eyebrow text-[#f5e9c8]/95">
                Animal Health · One Health · Executive Search
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="km-display mt-8 lg:mt-12 text-[clamp(3rem,9.4vw,11rem)] text-[#faf6ec] max-w-[14ch] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              Leadership for the{" "}
              <em className="text-[#e8d09a]">sectors sustaining life.</em>
            </h1>
          </Reveal>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-8 items-end">
            <Reveal delay={220} className="lg:col-span-7">
              <p className="text-lg lg:text-2xl text-[#faf6ec]/90 leading-snug max-w-2xl">
                A specialist executive search and leadership advisory firm
                serving Animal Health, veterinary, and One Health organizations
                — across Europe, North America, and Asia-Pacific.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              className="lg:col-span-4 lg:col-start-9 lg:justify-self-end"
            >
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <a
                  href="mailto:info@kennedymcarthur.com"
                  className="inline-flex items-center gap-3 bg-paper text-ink px-6 py-4 rounded-full text-sm font-medium hover:bg-[var(--color-sun)] transition-colors"
                >
                  Get in touch
                  <span aria-hidden>↗</span>
                </a>
                <Link
                  href="/solutions"
                  className="km-link text-sm text-[#faf6ec]"
                >
                  Explore Solutions
                  <span aria-hidden className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Caption strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-[#faf6ec]/15 bg-[#0f1e16]/40 backdrop-blur-md">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-4 flex justify-between items-center text-xs text-[#faf6ec]/80 tracking-[0.32em] uppercase">
            <span>Est. 2026 — London · Glasgow</span>
            <span className="hidden sm:flex items-center gap-3">
              At dawn, in the field <span className="block w-8 h-px bg-[#faf6ec]/40" />
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
         CONVICTION — typography led, no photograph required
      ────────────────────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28 lg:py-44">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
              <span className="km-eyebrow text-[var(--color-forest)]">
                Our Conviction
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="km-display mt-8 lg:mt-10 text-[clamp(2rem,5.5vw,5.5rem)] text-ink max-w-[18ch]">
              The sectors{" "}
              <em className="text-[var(--color-forest)]">sustaining life</em>{" "}
              deserve search delivered with the same rigor as the science
              itself.
            </p>
          </Reveal>

          <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-10 items-start">
            <Reveal delay={200} className="lg:col-span-5 lg:col-start-2">
              <p className="text-lg lg:text-xl text-stone-700 leading-relaxed">
                Kennedy McArthur was founded by senior search practitioners
                who&rsquo;ve spent careers inside the world&rsquo;s largest Animal
                Health, vaccine, and veterinary organizations. We bring that
                operating context to every mandate.
              </p>
            </Reveal>
            <Reveal delay={280} className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg lg:text-xl text-stone-700 leading-relaxed">
                Our remit is narrow on purpose: leadership at the intersection
                of biology, capital, and stewardship. Generic search firms
                can&rsquo;t hold all three at once. We were built to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
         CLIENT LOGOS
      ────────────────────────────────────────────────────────── */}
      <ClientLogos />

      {/* ─────────────────────────────────────────────────────────
         ONE HEALTH — single anchor image + three pillars in type
      ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-forest-deep)] text-paper">
        {/* Wide image strip behind the eyebrow */}
        <div className="relative h-[42vh] lg:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 km-kenburns">
            <SmartImage
              src={pastoralCow.src}
              alt={pastoralCow.alt}
              fill
              sizes="100vw"
              className="object-cover"
              treatmentClassName=""
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,31,23,0.35) 0%, rgba(14,31,23,0.6) 65%, rgba(14,31,23,1) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-[1440px] h-full px-6 lg:px-12 flex flex-col justify-end pb-12 lg:pb-20">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="inline-block w-9 h-px bg-[var(--color-sun)]" />
                <span className="km-eyebrow text-[var(--color-sun)]">
                  The Nexus
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="km-display mt-6 text-[clamp(2.25rem,6vw,6rem)] text-paper max-w-[16ch]">
                Three publics.{" "}
                <em className="text-[var(--color-sun)]">One mandate.</em>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Pillar list — typography led, no individual photos */}
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
          <ul className="grid md:grid-cols-3 gap-px bg-paper/10">
            {pillars.map((p, i) => (
              <Reveal
                as="li"
                key={p.num}
                delay={i * 120}
                className="bg-[var(--color-forest-deep)] p-10 lg:p-14 min-h-[26rem] flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <span className="km-eyebrow text-paper/50">Pillar {p.num}</span>
                  <p className="mt-2 text-paper/60 text-sm">{p.line}</p>
                </div>
                <span className="km-display text-[clamp(3.5rem,7vw,7rem)] text-paper leading-[0.85]">
                  {p.label}.
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <Link
              href="/one-health"
              className="km-link mt-14 lg:mt-20 inline-flex text-paper"
            >
              Read about One Health
              <span aria-hidden className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
         SOLUTIONS — bold editorial list, typography led
      ────────────────────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-28 lg:pt-40 pb-12 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <Reveal className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
                <span className="km-eyebrow text-[var(--color-forest)]">
                  Solutions
                </span>
              </div>
              <h2 className="km-display mt-6 text-[clamp(2.25rem,5.5vw,5.5rem)]">
                Five disciplines.{" "}
                <em className="text-[var(--color-forest)]">One mandate.</em>
              </h2>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-4 lg:col-start-9 self-end">
              <p className="text-base lg:text-lg text-stone-700 leading-relaxed">
                Generic agencies map roles. We map ecosystems — pairing
                deep-domain intelligence with the discipline of a long-term
                value-creation plan.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24 lg:pb-40">
          <ul className="border-t border-stone-300/60">
            {solutions.map((s, i) => (
              <Reveal as="li" key={s.num} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group grid grid-cols-12 gap-6 py-10 lg:py-14 border-b border-stone-300/60 transition-colors duration-500 hover:bg-[var(--color-forest-soft)]/50"
                >
                  <span className="col-span-2 lg:col-span-1 self-start">
                    <span className="km-eyebrow text-[var(--color-forest)]">
                      {s.num}
                    </span>
                  </span>
                  <span className="col-span-10 lg:col-span-6 km-display text-[clamp(1.8rem,4vw,3.4rem)] text-ink group-hover:translate-x-2 group-hover:text-[var(--color-forest)] transition-all duration-500 ease-out">
                    {s.title}
                  </span>
                  <span className="col-span-12 lg:col-span-4 self-center text-stone-700">
                    <span className="block lg:text-lg">{s.blurb}</span>
                    <span className="block mt-2 text-sm text-stone-600">
                      {s.detail}
                    </span>
                  </span>
                  <span className="hidden lg:inline-flex lg:col-span-1 self-center justify-self-end text-stone-500 group-hover:text-[var(--color-forest)] transition-colors text-2xl">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 lg:mt-20">
            <Reveal>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-3 border border-ink rounded-full px-7 py-4 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                See full Solutions overview <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
         TESTIMONIALS
      ────────────────────────────────────────────────────────── */}
      <Testimonials
        eyebrow="What clients say"
        title={
          <>
            Trusted by leaders across{" "}
            <em className="text-[var(--color-forest)]">Animal Health</em>,
            sustainability, and life sciences.
          </>
        }
      />

      {/* ─────────────────────────────────────────────────────────
         CLOSING CTA — image-led, single confirmed photo
      ────────────────────────────────────────────────────────── */}
      <section className="relative bg-paper">
        <div className="relative h-[44vh] lg:h-[64vh] overflow-hidden">
          <div className="absolute inset-0 km-kenburns">
            <SmartImage
              src={cattleHerd.src}
              alt={cattleHerd.alt}
              fill
              sizes="100vw"
              className="object-cover"
              treatmentClassName=""
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,22,17,0.0) 0%, rgba(26,22,17,0.55) 60%, rgba(26,22,17,0.85) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-[1440px] h-full px-6 lg:px-12 flex flex-col justify-end pb-14 lg:pb-24">
            <Reveal>
              <p className="km-eyebrow text-[var(--color-sun)]">
                Begin a conversation
              </p>
              <h2 className="km-display mt-6 text-[clamp(2.5rem,7vw,7.5rem)] text-paper max-w-[14ch]">
                Hire the leaders{" "}
                <em className="text-[var(--color-sun)]">your future requires.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <a
                href="mailto:info@kennedymcarthur.com"
                className="inline-flex items-center gap-3 bg-paper text-ink px-7 py-4 rounded-full text-base font-medium mt-10 hover:bg-[var(--color-sun)] transition-colors w-fit"
              >
                info@kennedymcarthur.com <span aria-hidden>↗</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
