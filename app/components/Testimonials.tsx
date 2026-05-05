import Reveal from "./Reveal";

export type Testimonial = {
  quote: string;
  attribution: string;
  about: "Joe" | "Stewart";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Joe is a highly skilled, wildly effective communicator and recruiter. I had the pleasure to work with Joe during an executive search. He builds relationships and collaborations very quickly and has a super broad view of the animal health industry. A progressive thinker, challenger, and driver of greater good — I am grateful he is choosing to work in the animal health space to make it even better.",
    attribution: "Chief Medical Officer, Major Animal Health Company",
    about: "Joe",
  },
  {
    quote:
      "Joe is an accomplished recruiter who I have used successfully to help us staff executive roles including Cluster VPs, Country Managers, BU and corporate functional leadership. I will continue to look to Joe as a partner and advisor as we grow our organisation, plan for succession, and continuously strive for diversity of talent.",
    attribution: "CEO, Animal Health & Agricultural Industry",
    about: "Joe",
  },
  {
    quote: "Stewart gets results, and is a pleasure to do business with.",
    attribution: "CEO, Sustainability Sector",
    about: "Stewart",
  },
  {
    quote:
      "I found Stewart great to work with. Incredible insight and industry contacts.",
    attribution: "CEO, UK Manufacturer",
    about: "Stewart",
  },
];

type Props = {
  filter?: "Joe" | "Stewart";
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  variant?: "light" | "dark";
};

export default function Testimonials({
  filter,
  eyebrow = "What clients say",
  title,
  intro,
  variant = "light",
}: Props) {
  const items = filter
    ? testimonials.filter((t) => t.about === filter)
    : testimonials;

  const isDark = variant === "dark";

  return (
    <section
      className={[
        "relative",
        isDark
          ? "bg-[var(--color-forest-deep)] text-paper"
          : "bg-stone-50 text-ink border-y border-stone-200",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <span
                className={[
                  "inline-block w-9 h-px",
                  isDark ? "bg-paper/50" : "bg-[var(--color-forest)]",
                ].join(" ")}
              />
              <span
                className={[
                  "km-eyebrow",
                  isDark ? "text-paper/70" : "text-[var(--color-forest)]",
                ].join(" ")}
              >
                {eyebrow}
              </span>
            </div>
            {title && (
              <h2 className="km-display mt-6 text-[clamp(2rem,4.5vw,3.75rem)]">
                {title}
              </h2>
            )}
          </Reveal>
          {intro && (
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 self-end">
              <p
                className={[
                  "text-lg leading-relaxed",
                  isDark ? "text-paper/80" : "text-stone-600",
                ].join(" ")}
              >
                {intro}
              </p>
            </Reveal>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((t, i) => (
            <Reveal as="figure" key={t.attribution} delay={i * 100}>
              <div
                className={[
                  "h-full p-8 lg:p-12 rounded-sm relative overflow-hidden flex flex-col justify-between",
                  isDark
                    ? "bg-paper/[0.04] border border-paper/10 backdrop-blur-sm"
                    : "bg-paper border border-stone-200",
                ].join(" ")}
              >
                <span
                  aria-hidden
                  className={[
                    "absolute top-2 left-4 km-display text-[10rem] leading-[0.8] select-none",
                    isDark ? "text-paper/10" : "text-[var(--color-forest)]/15",
                  ].join(" ")}
                >
                  &ldquo;
                </span>
                <blockquote
                  className={[
                    "relative km-display text-[clamp(1.25rem,2vw,1.7rem)] leading-snug",
                    isDark ? "text-paper" : "text-ink",
                  ].join(" ")}
                  style={{ fontWeight: 400 }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="relative mt-10 flex items-center gap-4">
                  <span
                    className={[
                      "inline-block w-7 h-px",
                      isDark ? "bg-paper/50" : "bg-[var(--color-forest)]",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "km-eyebrow",
                      isDark ? "text-paper/70" : "text-stone-500",
                    ].join(" ")}
                  >
                    {t.attribution}
                  </span>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
