"use client";

import { KLYPH_DATA } from "@/lib/data";

export function CTA() {
  const cta = KLYPH_DATA.cta;
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="cta" className="section sec-light py-20 sm:py-32 bg-white text-black border-t border-b border-black/10">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1240px]">
        <div className="cta-box bg-gradient-to-br from-zinc-950 to-black text-white rounded-3xl p-8 sm:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="cta-cnt max-w-2xl relative z-10">
            <h2 className="cta-ttl font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-4 sm:mb-6">
              {cta.line1}
              <br />
              <span className="hi bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">{cta.line2}</span>
            </h2>
            <p className="cta-sub text-zinc-400 text-xs sm:text-base leading-relaxed mb-8 sm:mb-10">{cta.sub}</p>

            <div className="cta-btns flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://cal.com/klyph/strategic-consultation"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary text-xs uppercase font-bold tracking-widest px-8 py-3.5 sm:py-4 rounded bg-white text-black hover:bg-zinc-200 transition-all text-center shadow-lg"
              >
                Schedule Consultation →
              </a>
              <button
                className="btn btn-ghost text-xs uppercase font-bold tracking-widest px-8 py-3.5 sm:py-4 rounded border border-white/20 text-white hover:bg-white/10 transition-all text-center"
                onClick={() => go("work")}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
