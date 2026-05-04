export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      {/* 01. THE HEADER: Single, Integrated, Elevated */}
      <header className="relative z-50 flex justify-between items-center px-8 py-10 lg:px-20 border-b border-white/5 bg-brand-midnight/40 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-brand-marine to-brand-electric rounded-full"></div>
          <div className="text-xl font-bold tracking-tighter uppercase">
            Kennedy <span className="text-brand-silver font-light">McArthur</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] font-bold">
          <a href="/solutions" className="hover:text-brand-electric transition-colors">Solutions</a>
          <a href="/partners" className="hover:text-brand-marine transition-colors">Partners</a>
          <a href="/one-health" className="hover:text-brand-electric transition-colors underline underline-offset-8 decoration-brand-electric/40">The Nexus</a>
        </nav>
      </header>

      {/* 02. HERO: High Contrast & Original Copy */}
      <section className="relative z-10 px-8 lg:px-20 pt-24 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-royal/30 border border-brand-marine/20 rounded-full mb-12">
            <span className="w-2 h-2 rounded-full bg-brand-electric animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-marine">Global Mandates Active</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-10">
              <h1 className="text-[11vw] lg:text-[8.5vw] font-bold leading-[0.85] tracking-tighter uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-marine">
                  Animal & One Health
                </span> <br />
                <span className="italic font-serif font-light text-brand-electric">
                  Executive Search
                </span>
              </h1>

              <p className="text-2xl lg:text-4xl font-light leading-snug text-brand-silver max-w-3xl">
                Leadership advisory and discreet mandates at the <span className="text-white border-b-2 border-brand-electric pb-1">nexus of planetary health.</span>
              </p>
            </div>

            <div className="lg:col-span-4 lg:pt-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-electric/10 blur-3xl group-hover:bg-brand-electric/20 transition-colors"></div>
                
                <h3 className="text-[11px] uppercase tracking-[0.5em] font-bold text-brand-marine">Identity</h3>
                <p className="text-sm leading-relaxed text-brand-silver font-light">
                  A bespoke partnership identifying the rare leaders who bridge the gap between scientific fluency and commercial dominance.
                </p>
                
                <a href="mailto:info@kennedymcarthur.com" className="flex items-center justify-between group/btn bg-white text-brand-midnight px-6 py-5 rounded-xl transition-all hover:scale-[1.02]">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black">Initiate Briefing</span>
                  <span className="text-xl group-hover/btn:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FOOTER SIGNIFIER */}
      <footer className="px-8 lg:px-20 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-40">
        <div className="text-[9px] uppercase tracking-[0.6em] font-medium">
          London • New York • Singapore
        </div>
        <div className="text-[9px] uppercase tracking-[0.4em]">
          BoardForge™ Methodology 2026
        </div>
      </footer>
    </main>
  );
}