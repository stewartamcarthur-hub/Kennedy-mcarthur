import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Solutions",
  description:
    "Executive search, talent pipelining, market mapping, onboarding advisory, and BoardForge architecture — five disciplines, one mandate.",
};

const solutions = [
  {
    id: "executive-search",
    num: "01",
    title: "Executive Search",
    summary:
      "Targeted, retained executive search for board appointments, C-Suite, and senior leadership.",
    body:
      "We use deep industry intelligence to identify talent that fits your future, not just your past — anchored in long-term value creation, not transactional placement.",
    tags: ["Board", "C-Suite", "Senior Leadership"],
  },
  {
    id: "pipelining",
    num: "02",
    title: "Talent Pipelining & Scouting",
    summary:
      "Proactive talent scouting aligned with your long-term value creation plans.",
    body:
      "Avoid “shopping while hungry”. We deliver regular market intelligence briefings at a cadence that suits your operating rhythm, so the bench is built before the seat opens.",
    tags: ["Pipeline", "Intelligence", "Cadence"],
  },
  {
    id: "mapping",
    num: "03",
    title: "Market Mapping & Competitor Intel",
    summary:
      "Discrete, data-driven mapping of competitor organizational structures.",
    body:
      "Detailed structural mapping across Europe, North America, and Asia-Pacific — built around the specific questions a leadership team or PE sponsor needs answered before acting.",
    tags: ["EMEA", "North America", "APAC"],
  },
  {
    id: "onboarding",
    num: "04",
    title: "Onboarding & Retention Advisory",
    summary:
      "Ensuring senior placements integrate successfully and create lasting value from day one.",
    body:
      "The hire is the beginning, not the end. We work with new appointees and their boards through the first 18 months to convert promise into measurable performance.",
    tags: ["Integration", "First 100 Days", "Retention"],
  },
  {
    id: "boardforge",
    num: "05",
    title: "BoardForge Architecture",
    summary:
      "A data-driven methodology that underpins our human capital strategy.",
    body:
      "BoardForge provides the infrastructure to support fast-scaling businesses — composition, capability, succession, and governance, modelled against the company's value creation plan.",
    tags: ["Methodology", "Governance", "Scale"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Five disciplines.
            <br />
            <em className="text-[var(--color-forest)]">One mandate.</em>
          </>
        }
        intro="Generic agencies map roles. We map ecosystems — pairing deep-domain intelligence with the discipline of a long-term value-creation plan."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {solutions.map((s, i) => (
            <Reveal key={s.id} as="article">
              <div
                id={s.id}
                className={[
                  "grid lg:grid-cols-12 gap-10 py-20 lg:py-28 border-b border-stone-200",
                  i === 0 ? "border-t border-stone-200" : "",
                ].join(" ")}
              >
                <div className="lg:col-span-1">
                  <span className="km-eyebrow text-[var(--color-forest)]">{s.num}</span>
                </div>
                <div className="lg:col-span-5">
                  <h2 className="km-display text-[clamp(2rem,4.5vw,3.75rem)]">
                    {s.title}
                  </h2>
                  <p className="mt-6 text-lg lg:text-xl text-stone-700 leading-relaxed max-w-xl">
                    {s.summary}
                  </p>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
                    {s.body}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="text-xs uppercase tracking-[0.18em] border border-stone-300 rounded-full px-3 py-1.5 text-stone-600"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <p className="km-eyebrow text-stone-400 mb-6">Begin a mandate</p>
            <p className="km-display text-[clamp(2.25rem,5vw,4.75rem)]">
              Tell us the seat that needs filling — and the future you{" "}
              <em className="text-[#a0c8b8]">need it to fill.</em>
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:justify-self-end">
            <a
              href="mailto:info@kennedymcarthur.com"
              className="inline-flex items-center gap-3 bg-paper text-ink px-8 py-5 rounded-full text-base font-medium hover:bg-stone-200 transition-colors"
            >
              info@kennedymcarthur.com <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
