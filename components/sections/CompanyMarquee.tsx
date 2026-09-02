"use client";

import { KLYPH_DATA } from "@/lib/data";

export function CompanyMarquee() {
  const companies = KLYPH_DATA.companies;
  const doubled = [...companies, ...companies];

  return (
    <section className="section sec-light py-16 bg-white text-black border-t border-b border-black/10 overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1240px] text-center mb-8">
        <p className="font-syne text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase">
          Trusted by industry pioneers across North America & Europe
        </p>
      </div>

      <div className="co-wrap overflow-hidden">
        <div className="co-track flex gap-8 animate-marquee w-max">
          {doubled.map((c, i) => (
            <div key={i} className="co-pill bg-zinc-100 border border-black/10 rounded-full px-6 py-3 flex items-center gap-3 shrink-0">
              <div className="co-logo w-7 h-7 rounded-full bg-black text-white font-syne font-bold text-xs flex items-center justify-center">
                {c.init}
              </div>
              <span className="co-name font-syne font-bold text-xs uppercase tracking-wider text-black">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
