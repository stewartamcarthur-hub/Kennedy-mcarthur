import Reveal from "./Reveal";

/**
 * Client logo placeholders.
 *
 * NOTE: These are wordmark *placeholders* set in serif/sans typography
 * — not the real client logos. Replace with licensed SVGs once available.
 * Kept monochrome to fit the executive aesthetic.
 */

const clients = [
  { name: "Zoetis", style: "font-serif italic tracking-tight" },
  { name: "Mars", style: "font-sans font-bold tracking-[0.18em] uppercase" },
  { name: "Elanco", style: "font-sans font-light tracking-[0.32em] uppercase" },
  { name: "Ceva", style: "font-serif tracking-tight" },
  { name: "MSD Animal Health", style: "font-sans font-medium tracking-tight" },
  { name: "Anterra Capital", style: "font-serif italic tracking-tight" },
  { name: "Chanelle Pharma", style: "font-sans font-light tracking-[0.2em] uppercase" },
  { name: "AgroFresh", style: "font-sans font-bold tracking-tight" },
];

export default function ClientLogos() {
  // Duplicate for seamless marquee
  const track = [...clients, ...clients];

  return (
    <section className="relative py-20 lg:py-28 border-y border-stone-200 overflow-hidden bg-stone-50">
      <Reveal className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-12">
        <div className="flex items-center gap-4">
          <span className="km-rule text-stone-400" />
          <span className="km-eyebrow text-stone-500">Trusted Companies We Serve</span>
        </div>
      </Reveal>

      <div
        className="relative w-full"
        aria-label="Selected clients"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10" />

        <div className="km-marquee flex w-max items-center gap-16 px-6">
          {track.map((c, i) => (
            <span
              key={`${c.name}-${i}`}
              className={[
                "shrink-0 text-2xl lg:text-3xl text-stone-700/80 hover:text-ink transition-colors duration-500",
                c.style,
              ].join(" ")}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>

      <p className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-10 text-xs text-stone-400">
        Wordmarks shown for illustrative purposes only.
      </p>
    </section>
  );
}
