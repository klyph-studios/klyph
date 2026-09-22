"use client";

import { KLYPH_DATA } from "@/lib/data";

export function Testimonials() {
  const testimonials = KLYPH_DATA.testimonials;
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section sec-dark py-20 sm:py-32 bg-black text-white border-t border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1240px] text-center mb-12 sm:mb-16">
        <div className="section-tag inline-flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 mb-3 sm:mb-4 justify-center">
          <span className="w-7 h-[1px] bg-zinc-500 block" />
          Client Testimonials
          <span className="w-1.5 h-1.5 rounded-full bg-white block" />
        </div>
        <h2 className="headline font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white">
          What Market Leaders <span className="hi bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Say</span>
        </h2>
      </div>

      <div className="testi-wrap relative w-full overflow-hidden">
        <div className="testi-track flex gap-4 sm:gap-8 animate-marquee w-max py-4">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="tcard glass-dark w-[280px] sm:w-[420px] rounded-2xl p-6 sm:p-8 border border-white/10 shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="tstars text-amber-400 text-sm mb-3 sm:mb-4">{"★".repeat(t.stars)}</div>
                <p className="tquote text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 italic">"{t.quote}"</p>
              </div>

              <div className="tauthor flex items-center gap-3.5 sm:gap-4 pt-5 sm:pt-6 border-t border-white/10">
                <div className="tav w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-syne font-bold text-white text-xs">
                  {t.init}
                </div>
                <div>
                  <div className="tname font-syne font-bold text-white text-xs sm:text-sm">{t.author}</div>
                  <div className="trole text-[11px] sm:text-xs text-zinc-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
