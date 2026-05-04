import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Insights",
  description:
    "Thought leadership, market briefs, and commentary on the intersection of human and animal health, private equity value creation, and talent optimization.",
};

const insights = [
  {
    kind: "Market Brief",
    date: "Forthcoming",
    title:
      "Why Animal Health is the next venue for serious PE value creation.",
    blurb:
      "A short note on the structural shifts re-rating the Animal Health sector — and why the human capital playbook from Human Pharma will only partially translate.",
  },
  {
    kind: "Commentary",
    date: "Forthcoming",
    title:
      "The chief commercial leader of 2030 will be a translator, not an operator.",
    blurb:
      "Three competencies that distinguish the next generation of senior leaders at the One Health intersection.",
  },
  {
    kind: "Market Brief",
    date: "Forthcoming",
    title:
      "Mapping the European veterinary capital landscape after the wave.",
    blurb:
      "An update for sponsors and operators on capability concentration, exits, and the talent implications of the recent consolidation cycle.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Thinking from the <em className="text-[var(--color-forest)]">nexus</em> of human capital and life sciences.
          </>
        }
        intro="Articles, podcasts, and commentary on the intersection of human and animal health, private equity value creation, and talent optimization."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-24">
          <Reveal>
            <div className="border border-stone-200 rounded-3xl p-10 lg:p-14 bg-stone-50 km-grain relative overflow-hidden flex flex-col lg:flex-row gap-8 lg:items-end justify-between">
              <div className="max-w-2xl">
                <p className="km-eyebrow text-stone-500 mb-4">Briefing list</p>
                <h2 className="km-display text-[clamp(2rem,4vw,3.5rem)]">
                  Receive market briefs at a cadence that fits your rhythm.
                </h2>
                <p className="mt-6 text-stone-600 max-w-xl">
                  We publish irregularly and only when there is something worth
                  saying. To be added to the list, write to us.
                </p>
              </div>
              <a
                href="mailto:info@kennedymcarthur.com?subject=Briefing%20list"
                className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors self-start lg:self-auto"
              >
                Request briefings <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24 lg:pb-36">
          <Reveal>
            <div className="flex items-center gap-4 mb-10 lg:mb-14">
              <span className="km-rule text-stone-400" />
              <span className="km-eyebrow text-stone-500">Forthcoming</span>
            </div>
          </Reveal>

          <ul>
            {insights.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <article className="group grid grid-cols-12 gap-6 py-10 lg:py-14 border-t border-stone-200 first:border-t-0 lg:first:border-t">
                  <div className="col-span-12 lg:col-span-2">
                    <p className="km-eyebrow text-stone-500">{item.kind}</p>
                    <p className="text-xs text-stone-400 mt-2">{item.date}</p>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <h3 className="km-display text-[clamp(1.6rem,3vw,2.5rem)] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-stone-600 max-w-2xl">
                      {item.blurb}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-3 lg:justify-self-end self-end">
                    <span className="km-eyebrow text-stone-400">
                      Read on publish
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
