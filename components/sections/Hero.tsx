"use client";

import React, { useRef } from "react";
import { VercelTriangle } from "@/components/ui/VercelTriangle";

export function Hero() {
  const scrollToDemo = () => {
    document.getElementById("agent-showcase")?.scrollIntoView({ behavior: "smooth" });
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
            <h1 className="font-sans font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.03] tracking-[-0.035em] text-white">
              Agentic
              <span className="block mt-1 sm:mt-2 text-white">Infrastructure</span>
            </h1>

            <div className="flex items-center gap-3 mt-8 sm:mt-10">
              <button
                onClick={scrollToDemo}
                className="bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Deploy now
              </button>

              <button
                onClick={scrollToContact}
                className="bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 font-medium text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:border-white/25 active:scale-[0.98]"
              >
                Talk to sales
              </button>
            </div>
          </div>

          {/* Center Column: 3D Volumetric Glowing Triangle */}
          <div className="lg:col-span-4 flex items-center justify-center py-4 lg:py-0">
            <VercelTriangle />
          </div>

          {/* Right Column: Crisp 3-Line Proposition */}
          <div className="lg:col-span-3 flex flex-col justify-center lg:items-end text-left lg:text-left">
            <div className="space-y-2.5 sm:space-y-3 text-zinc-400 font-normal text-base sm:text-lg leading-snug tracking-tight">
              <p className="hover:text-zinc-200 transition-colors cursor-default">For coding agents</p>
              <p className="hover:text-zinc-200 transition-colors cursor-default">To ship apps and agents</p>
              <p className="hover:text-zinc-200 transition-colors cursor-default">Automated by agents</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
