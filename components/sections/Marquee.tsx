"use client";

import { KLYPH_DATA } from "@/lib/data";

export function Marquee() {
  const items = KLYPH_DATA.marquee;
  const doubled = [...items, ...items];

  return (
    <div className="mq sec-light py-8 overflow-hidden bg-white text-black border-t border-b border-black/10">
      <div className="mq-track flex gap-14 whitespace-nowrap animate-marquee w-max">
        {doubled.map((item, i) => (
          <div className="mq-item flex items-center gap-4 font-syne font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-zinc-600 hover:text-black transition-colors" key={i}>
            <span className="text-black text-xs">◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
