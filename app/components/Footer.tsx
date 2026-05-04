import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-6">
            <p
              className="km-display text-[clamp(2.5rem,5vw,4.75rem)] text-paper"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              People First.
              <br />
              Technology Forward.
              <br />
              <em className="text-[#a0c8b8]">Planetary Impact.</em>
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="km-eyebrow text-stone-400 mb-5">Get in touch</p>
            <a
              href="mailto:info@kennedymcarthur.com"
              className="km-link text-xl"
            >
              info@kennedymcarthur.com
              <span aria-hidden className="arrow">↗</span>
            </a>
            <p className="mt-10 text-sm text-stone-400 leading-relaxed">
              Kennedy McArthur Ltd
              <br />
              London · Glasgow
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="km-eyebrow text-stone-400 mb-5">Sitemap</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-stone-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-stone-300 transition-colors">About</Link></li>
              <li><Link href="/one-health" className="hover:text-stone-300 transition-colors">One Health</Link></li>
              <li><Link href="/solutions" className="hover:text-stone-300 transition-colors">Solutions</Link></li>
              <li><Link href="/insights" className="hover:text-stone-300 transition-colors">Insights</Link></li>
              <li><Link href="/partners" className="text-stone-500">Partners <span className="text-[10px] tracking-widest uppercase">— Dormant</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-stone-400">
          <span>© {new Date().getFullYear()} Kennedy McArthur. All rights reserved.</span>
          <span className="tracking-[0.32em] uppercase text-[10px]">Animal · One Health · Executive Search</span>
        </div>
      </div>
    </footer>
  );
}
