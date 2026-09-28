"use client";

import React from "react";
import { KLYPH_DATA } from "@/lib/data";

export function CTA() {
  const cta = KLYPH_DATA.cta;

  return (
    <section id="cta" className="relative py-28 sm:py-36 bg-black text-white overflow-hidden border-t border-white/[0.08]">
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(255,255,255,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10">
        <h2 className="font-sans font-semibold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] text-white max-w-3xl mx-auto leading-[1.05]">
          {cta.line1}
          <span className="block text-zinc-400 mt-2">{cta.line2}</span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
          {cta.sub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-9">
          <a
            href="https://cal.com/klyph/strategic-consultation"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Schedule Consultation →
          </a>

          <a
            href={`mailto:${cta.email}`}
            className="w-full sm:w-auto bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 font-medium text-sm px-7 py-3 rounded-full transition-all duration-200 hover:border-white/25 active:scale-[0.98] text-center"
          >
            Direct Inquiry: {cta.email}
          </a>
        </div>
      </div>
    </section>
  );
}
