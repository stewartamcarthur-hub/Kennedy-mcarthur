import Link from "next/link";
import Reveal from "./components/Reveal";
import ClientLogos from "./components/ClientLogos";
import SmartImage from "./components/SmartImage";
import { heroImage, oneHealthTriptych } from "./lib/images";

const solutions = [
  { num: "01", title: "Executive Search", href: "/solutions#executive-search", blurb: "Targeted, retained search for board appointments, C-suite, and senior leadership." },
  { num: "02", title: "Talent Pipelining & Scouting", href: "/solutions#pipelining", blurb: "Proactive scouting aligned to your long-term value creation plans." },
  { num: "03", title: "Market Mapping & Competitor Intel", href: "/solutions#mapping", blurb: "Discrete, data-driven mapping across Europe, North America, and Asia-Pacific." },
  { num: "04", title: "Onboarding & Retention Advisory", href: "/solutions#onboarding", blurb: "Ensuring senior placements integrate and create lasting value from day one." },
  { num: "05", title: "BoardForge Architecture", href: "/solutions#boardforge", blurb: "A data-driven methodology underpinning human capital strategy at scale." },
];

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative km-grain overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 lg:pt-28 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* LEFT: Tagline + Headline + CTA */}
            <div className="lg:col-span-7">
              {/* Tagline */}
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="km-accent-rule" />
                  <span className="km-eyebrow text-[var(--color-forest)]">
                    People First · Technology Forward · Planetary Impact
                  </span>
                </div>
              </Reveal>

              {/* Display Headline */}
              <Reveal delay={120}>
                <h1 className="km-display mt-10 lg:mt-14 text-[clamp(2.75rem,8.5vw,9.5rem)] text-ink max-w-[16ch]">
                  Animal &amp;{" "}
                  <em className="text-[var(--color-forest)]">One Health</em>{" "}
                  Executive Search.
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-10 lg:mt-12 text-xl lg:text-2xl text-stone-700 leading-snug max-w-2xl">
                  Executive search and leadership advisory at the nexus of planetary
                  health — built on the conviction that the sectors sustaining life
                  deserve the same rigor as the science itself.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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

            {/* RIGHT: Hero image */}
            <div className="lg:col-span-5">
              <Reveal delay={180}>
                <figure className="km-image-frame aspect-[4/5] lg:aspect-[3/4] rounded-sm">
                  <SmartImage
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <figcaption className="mt-3 text-xs text-stone-500 tracking-tight">
                  Animal Health · sector at scale
                </figcaption>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom hairline */}
        <div className="border-t border-stone-200">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 flex justify-between items-center text-xs text-stone-500">
            <span className="tracking-[0.32em] uppercase">Est. 2026 — London · Glasgow</span>
            <span className="hidden sm:flex items-center gap-3 tracking-[0.32em] uppercase">
              Scroll <span className="block w-8 h-px bg-stone-400" />
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- CONVICTION ---------------- */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-1/3 -right-1/4 w-[80%] h-[160%] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-forest) 0%, transparent 60%)" }}
        />
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28 lg:py-44 grid lg:grid-cols-12 gap-10 relative">
          <Reveal className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="km-rule text-stone-400" />
              <span className="km-eyebrow text-stone-400">Our Conviction</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-9">
            <p className="km-display text-[clamp(2rem,5vw,4.75rem)] text-paper">
              We were founded on a single conviction: the sectors{" "}
              <em className="text-[#7fbfa8]">sustaining life</em> deserve executive
              search delivered with the same rigor as the science itself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TRUSTED BY ---------------- */}
      <ClientLogos />

      {/* ---------------- SOLUTIONS PREVIEW ---------------- */}
      <section className="py-28 lg:py-40 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
            <Reveal className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <span className="km-accent-rule" />
                <span className="km-eyebrow text-[var(--color-forest)]">Solutions</span>
              </div>
              <h2 className="km-display mt-6 text-[clamp(2.25rem,5.5vw,5rem)]">
                Five disciplines.
                <br />
                <em className="text-[var(--color-forest)]">One mandate.</em>
              </h2>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-lg text-stone-600 leading-relaxed">
                Generic agencies map roles. We map ecosystems — pairing
                deep-domain intelligence with the discipline of a long-term
                value-creation plan.
              </p>
              <Link href="/solutions" className="km-link mt-8 text-ink">
                See all solutions
                <span aria-hidden className="arrow">→</span>
              </Link>
            </Reveal>
          </div>

          <ul className="border-t border-stone-200">
            {solutions.map((s, i) => (
              <Reveal as="li" key={s.num} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group grid grid-cols-12 gap-6 py-8 lg:py-10 border-b border-stone-200 transition-colors hover:bg-stone-50"
                >
                  <span className="col-span-2 lg:col-span-1 text-sm text-stone-400 tracking-tight pt-1 group-hover:text-[var(--color-forest)] transition-colors">
                    {s.num}
                  </span>
                  <span className="col-span-10 lg:col-span-5 km-display text-[clamp(1.6rem,3.5vw,2.6rem)] text-ink group-hover:translate-x-2 group-hover:text-[var(--color-forest)] transition-all duration-500 ease-out">
                    {s.title}
                  </span>
                  <span className="hidden lg:block lg:col-span-5 text-stone-600 self-center">
                    {s.blurb}
                  </span>
                  <span className="col-span-12 lg:col-span-1 self-center justify-self-end text-stone-400 group-hover:text-[var(--color-forest)] transition-colors">
                    ↗
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- ONE HEALTH PROMO with image triptych ---------------- */}
      <section className="bg-[var(--color-forest-soft)] border-t border-stone-200">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">
            <Reveal className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="km-accent-rule" />
                <span className="km-eyebrow text-[var(--color-forest)]">The Nexus</span>
              </div>
              <h2 className="km-display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
                The <em className="text-[var(--color-forest)]">health</em> of animals, humans, and our environment{" "}
                <span className="text-stone-500">are inseparable.</span>
              </h2>
              <Link href="/one-health" className="km-link mt-10 text-ink">
                Read about One Health
                <span aria-hidden className="arrow">→</span>
              </Link>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-6 lg:col-start-7 space-y-10">
              <div>
                <p className="km-eyebrow text-stone-500 mb-3">Specialist Focus</p>
                <p className="text-lg lg:text-xl text-stone-700 leading-relaxed">
                  Global reach, deep-domain focus. Our core expertise lies within
                  the specialized Animal Health and One Health sectors — depth
                  that generic search firms cannot match.
                </p>
              </div>
              <div className="border-t border-stone-300 pt-10">
                <p className="km-eyebrow text-stone-500 mb-3">Cross-Sector Innovation</p>
                <p className="text-lg lg:text-xl text-stone-700 leading-relaxed">
                  We translate talent from human life sciences, pharmaceuticals,
                  and agricultural technology to bring progressive commercial
                  leadership to Animal Health.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image triptych */}
          <div className="grid md:grid-cols-3 gap-6">
            {oneHealthTriptych.map((img, i) => (
              <Reveal key={img.id} delay={i * 120} className="group">
                <figure className="km-image-frame aspect-[4/5] rounded-sm">
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-5 left-5 z-10 text-paper">
                    <span className="km-eyebrow opacity-80">{`0${i + 1}`}</span>
                    <span className="block km-display text-3xl mt-2">
                      {["Animal", "Human", "Planetary"][i]}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28 lg:py-40 text-center">
          <Reveal>
            <p className="km-eyebrow text-[var(--color-forest)]">Begin a conversation</p>
            <h2 className="km-display mt-6 text-[clamp(2.5rem,7vw,7rem)]">
              Hire the leaders <br />{" "}
              <em className="text-[var(--color-forest)]">your future requires.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <a
              href="mailto:info@kennedymcarthur.com"
              className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-5 rounded-full text-base font-medium mt-12 hover:bg-[var(--color-forest)] transition-colors"
            >
              info@kennedymcarthur.com
              <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
