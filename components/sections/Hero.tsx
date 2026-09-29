"use client";

import React from "react";
import { VercelTriangle } from "@/components/ui/VercelTriangle";
import { KLYPH_DATA } from "@/lib/data";

export function Hero() {
  const h = KLYPH_DATA.hero;

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pb-24 bg-black text-white overflow-hidden"
    >
      {/* Subtle top ambient radial lighting */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-25"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(255,255,255,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{h.badge}</span>
            </div>

            <h1 className="font-sans font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] leading-[1.04] tracking-[-0.035em] text-white">
              {h.line1}
              <span className="block mt-1 sm:mt-2 text-zinc-400">{h.line2}</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-normal">
              {h.sub}
            </p>

            <div className="flex items-center gap-3 mt-8 sm:mt-10">
              <button
                onClick={scrollToWork}
                className="bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Work →
              </button>

              <a
                href="https://cal.com/klyph/strategic-consultation"
                target="_blank"
                rel="noreferrer"
                className="bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 font-medium text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:border-white/25 active:scale-[0.98]"
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* Center Column: 3D Volumetric Glowing Triangle */}
          <div className="lg:col-span-4 flex items-center justify-center py-4 lg:py-0">
            <VercelTriangle />
          </div>

          {/* Right Column: Crisp 3-Line Metrics */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between sm:justify-start lg:justify-center gap-6 sm:gap-10 lg:gap-0 lg:space-y-5 text-left pt-6 lg:pt-0 border-t border-white/[0.08] lg:border-t-0">
            {h.metrics.map((m, i) => (
              <div key={i} className="group cursor-default">
                <div className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {m.val}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                  {m.lbl}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
