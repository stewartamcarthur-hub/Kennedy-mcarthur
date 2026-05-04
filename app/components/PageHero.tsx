import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative pt-24 lg:pt-36 pb-16 lg:pb-24 border-b border-stone-200">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="km-rule text-stone-400" />
            <span className="km-eyebrow text-stone-500">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="km-display mt-8 text-[clamp(3rem,8vw,8rem)] text-ink max-w-[18ch]"
          >
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={180}>
            <p className="mt-8 lg:mt-10 max-w-2xl text-lg lg:text-xl leading-relaxed text-stone-600">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
