import Link from "next/link";
import Reveal from "./components/Reveal";
import ClientLogos from "./components/ClientLogos";
import SmartImage from "./components/SmartImage";
import Testimonials from "./components/Testimonials";
import {
  heroImage,
  oneHealthTriptych,
  solutionImages,
  convictionImage,
  closingImage,
} from "./lib/images";

const solutions = [
  {
    num: "01",
    title: "Executive Search",
    href: "/solutions#executive-search",
    blurb:
      "Targeted, retained search for board appointments, C-suite, and senior leadership at the science-and-commerce intersection.",
    detail:
      "We use deep industry intelligence to identify talent that fits your future, not just your past.",
    image: solutionImages.executiveSearch,
  },
  {
    num: "02",
    title: "Talent Pipelining & Scouting",
    href: "/solutions#pipelining",
    blurb:
      "Proactive scouting aligned with long-term value creation plans.",
    detail:
      "Avoid 'shopping while hungry'. Regular market intelligence briefings at a cadence that suits you.",
    image: solutionImages.pipelining,
  },
  {
    num: "03",
    title: "Market Mapping & Competitor Intel",
    href: "/solutions#mapping",
    blurb:
      "Discrete, data-driven mapping across Europe, North America, and Asia-Pacific.",
    detail:
      "Detailed structural mapping, designed around the questions a leadership team or PE sponsor needs answered.",
    image: solutionImages.mapping,
  },
  {
    num: "04",
    title: "Onboarding & Retention Advisory",
    href: "/solutions#onboarding",
    blurb:
      "Senior placements that integrate and create lasting value from day one.",
    detail:
      "We work with new appointees and their boards through the first 18 months — converting promise into measurable performance.",
    image: solutionImages.onboarding,
  },
  {
    num: "05",
    title: "BoardForge Architecture",
    href: "/solutions#boardforge",
    blurb:
      "A data-driven methodology underpinning human capital strategy.",
    detail:
      "Composition, capability, succession, and governance — modelled against your value creation plan.",
    image: solutionImages.boardforge,
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------- HERO — image-led, with topographic motion overlay ---------------- */}
      <section className="relative min-h-[88vh] lg:min-h-[94vh] flex items-end overflow-hidden bg-ink">
        {/* Hero image — full bleed, slow Ken Burns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 km-kenburns">
            <SmartImage
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              treatmentClassName=""
            />
          </div>
          {/* Image dimming so the headline can lead */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.55) 38%, rgba(10,10,10,0.18) 70%, rgba(10,10,10,0.45) 100%)",
            }}
          />
          {/* Animated topographic SVG layered on top, low opacity */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.55] mix-blend-screen"
            viewBox="0 0 1600 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="kmHeroTopo" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#a0c8b8" stopOpacity="0.55" />
                <stop offset="0.55" stopColor="#a0c8b8" stopOpacity="0.18" />
                <stop offset="1" stopColor="#e6c2a8" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <g
              stroke="url(#kmHeroTopo)"
              strokeWidth="1"
              fill="none"
              className="km-topo"
            >
              {Array.from({ length: 9 }).map((_, i) => {
                const y = 120 + i * 95;
                const phase = i * 30;
                const amp = 60 + (i % 3) * 14;
                return (
                  <path
                    key={i}
                    d={`M -100,${y} C 200,${y - amp} 500,${y + amp} 800,${y - amp / 1.4} S 1400,${y + amp} 1700,${y - amp / 2}`}
                    style={{
                      animation: `km-topo-drift ${22 + i * 1.6}s ease-in-out ${-phase}s infinite alternate`,
                      transformOrigin: "center",
                      opacity: 0.75 - i * 0.05,
                    }}
                  />
                );
              })}
            </g>
          </svg>
          <div aria-hidden className="absolute inset-0 km-grain" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-32 pb-20 lg:pt-44 lg:pb-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="inline-block w-9 h-px bg-paper/70" />
              <span className="km-eyebrow text-paper/85">
                Animal Health · One Health · Executive Search
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="km-display mt-8 lg:mt-12 text-[clamp(3rem,9vw,10rem)] text-paper max-w-[15ch]">
              Leadership at the{" "}
              <em className="text-[#cfeadf]">nexus</em> of planetary health.
            </h1>
          </Reveal>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-8 items-end">
            <Reveal delay={220} className="lg:col-span-7">
              <p className="text-lg lg:text-2xl text-paper/85 leading-snug max-w-2xl">
                Specialist executive search and leadership advisory for
                Animal Health, veterinary, and One Health organizations —
                across Europe, North America, and Asia-Pacific.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              className="lg:col-span-4 lg:col-start-9 lg:justify-self-end"
            >
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <a
                  href="mailto:info@kennedymcarthur.com"
                  className="inline-flex items-center gap-3 bg-paper text-ink px-6 py-4 rounded-full text-sm font-medium hover:bg-[var(--color-forest)] hover:text-paper transition-colors"
                >
                  Get in touch
                  <span aria-hidden>↗</span>
                </a>
                <Link href="/solutions" className="km-link text-sm text-paper">
                  Explore Solutions
                  <span aria-hidden className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Caption strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-paper/15 bg-ink/40 backdrop-blur-md">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-4 flex justify-between items-center text-xs text-paper/80 tracking-[0.32em] uppercase">
            <span>Est. 2026 — London · Glasgow</span>
            <span className="hidden sm:flex items-center gap-3">
              Scroll <span className="block w-8 h-px bg-paper/40" />
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- CONVICTION — image + quote, side by side ---------------- */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <figure className="km-image-frame aspect-[4/5] rounded-sm">
              <SmartImage
                src={convictionImage.src}
                alt={convictionImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
                <span className="km-eyebrow text-[var(--color-forest)]">
                  Our Conviction
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="km-display mt-6 text-[clamp(1.75rem,3.6vw,3.4rem)] text-ink">
                We were founded on a single conviction: the sectors{" "}
                <em className="text-[var(--color-forest)]">sustaining life</em>{" "}
                deserve executive search delivered with the same rigor as the
                science itself.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-lg text-stone-600 leading-relaxed max-w-xl">
                Animal Health is where biology, capital, and stewardship meet.
                Generic search firms can&rsquo;t hold all three at once. We were built
                to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- TRUSTED BY ---------------- */}
      <ClientLogos />

      {/* ---------------- ONE HEALTH — repositioned earlier as the philosophical anchor ---------------- */}
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
              <p className="mt-8 text-lg text-stone-700 leading-relaxed max-w-xl">
                Three publics, one mandate. Kennedy McArthur builds the
                leadership teams whose remit crosses all three.
              </p>
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

      {/* ---------------- SOLUTIONS — editorial zigzag, one row per discipline ---------------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-24 lg:pt-36 pb-12 lg:pb-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="inline-block w-9 h-px bg-[var(--color-forest)]" />
              <span className="km-eyebrow text-[var(--color-forest)]">
                Solutions
              </span>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-10 mt-6 items-end">
            <Reveal delay={120} className="lg:col-span-7">
              <h2 className="km-display text-[clamp(2.25rem,5vw,4.5rem)]">
                Five disciplines.{" "}
                <em className="text-[var(--color-forest)]">One mandate.</em>
              </h2>
            </Reveal>
            <Reveal delay={200} className="lg:col-span-4 lg:col-start-9 self-end">
              <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
                Generic agencies map roles. We map ecosystems — pairing
                deep-domain intelligence with the discipline of a long-term
                value-creation plan.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Zigzag rows */}
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24 lg:pb-36">
          <ul className="space-y-20 lg:space-y-32">
            {solutions.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal as="li" key={s.num}>
                  <Link
                    href={s.href}
                    className={[
                      "group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                      flip ? "lg:[direction:rtl]" : "",
                    ].join(" ")}
                  >
                    <div className="lg:col-span-7 lg:[direction:ltr]">
                      <figure className="km-image-frame aspect-[16/10] rounded-sm">
                        <SmartImage
                          src={s.image.src}
                          alt={s.image.alt}
                          fill
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                        />
                      </figure>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9 lg:[direction:ltr]">
                      <span className="km-eyebrow text-[var(--color-forest)]">
                        {s.num}
                      </span>
                      <h3 className="km-display mt-4 text-[clamp(1.75rem,3.4vw,2.6rem)] text-ink group-hover:text-[var(--color-forest)] transition-colors duration-500">
                        {s.title}
                      </h3>
                      <p className="mt-5 text-stone-700 leading-relaxed">
                        {s.blurb}
                      </p>
                      <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                        {s.detail}
                      </p>
                      <span className="km-link mt-6 inline-flex text-ink">
                        Learn more
                        <span aria-hidden className="arrow">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <div className="mt-16 lg:mt-24 text-center">
            <Reveal>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-3 border border-ink rounded-full px-7 py-4 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                See full Solutions overview
                <span aria-hidden>↗</span>
              </Link>
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

      {/* ---------------- CLOSING — softer, image-led ---------------- */}
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
              Every brief is read by a partner. Tell us the seat, the timeframe,
              and what success looks like — we&rsquo;ll come back to you within
              two business days.
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
                src={closingImage.src}
                alt={closingImage.alt}
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
