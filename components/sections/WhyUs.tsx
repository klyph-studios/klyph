"use client";

import { KLYPH_DATA } from "@/lib/data";

export function WhyUs() {
  const w = KLYPH_DATA.whyUs;
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className="section sec-dark py-20 sm:py-32 bg-black text-white border-t border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1240px]">
        <div className="why-layout grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="section-tag inline-flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 mb-3 sm:mb-4">
              <span className="w-7 h-[1px] bg-zinc-500 block" />
              {w.tag}
              <span className="w-1.5 h-1.5 rounded-full bg-white block" />
            </div>
            <h2 className="headline font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4 sm:mb-6">
              {w.headline1}
              <br />
              <span className="hi bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">{w.headline2}</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-base leading-relaxed max-w-lg mb-6 sm:mb-8">{w.sub}</p>
            <button
              className="btn btn-primary text-xs uppercase font-bold tracking-widest px-8 py-3.5 sm:py-4 rounded bg-white text-black hover:bg-zinc-200 transition-all w-full sm:w-auto"
              onClick={() => go("cta")}
            >
              Get Started →
            </button>
          </div>

          <div className="why-cards grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 lg:mt-0">
            {w.cards.map((c, i) => (
              <div key={i} className="why-card glass-dark rounded-2xl p-5 sm:p-6 border border-white/10 transition-all duration-300 hover:border-white/30">
                <span className="why-ico text-2xl sm:text-3xl mb-3 sm:mb-4 block">{c.icon}</span>
                <h3 className="why-ttl font-syne font-bold text-base sm:text-lg text-white mb-2">{c.title}</h3>
                <p className="why-desc text-zinc-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
