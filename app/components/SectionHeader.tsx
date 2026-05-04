import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
            <span className="km-rule text-stone-400" />
            <span className="km-eyebrow text-stone-500">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="km-display mt-6 text-[clamp(2.25rem,5.2vw,4.5rem)] text-ink">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p className="mt-6 text-lg lg:text-xl text-stone-600 leading-relaxed max-w-2xl">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
