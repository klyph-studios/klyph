"use client";

import React from "react";
import { KLYPH_DATA } from "@/lib/data";

export function Testimonials() {
  const testimonials = KLYPH_DATA.testimonials;

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/[0.08]">
      
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            Verified Client Feedback
          </div>
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white">
            What market leaders say about Klyph
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Real outcomes from high-growth founders, managing partners, and executive boards.
          </p>
        </div>

        {/* Testimonials Grid in Vercel Dark Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl bg-[#080808] border border-white/[0.1] hover:border-white/20 p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Header: Stars & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-amber-400 text-sm tracking-wider">
                    {"★".repeat(t.stars)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400">
                    {t.cat}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 border-t border-white/[0.06] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-sans font-bold text-xs text-white shrink-0">
                  {t.init}
                </div>
                <div>
                  <div className="font-sans font-semibold text-sm text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
