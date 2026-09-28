"use client";

import React, { useState } from "react";
import { KLYPH_DATA, ProjectItem } from "@/lib/data";

interface PortfolioProps {
  onOpenModal?: (id: string) => void;
}

export function Portfolio({}: PortfolioProps) {
  const projects = KLYPH_DATA.projects;
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/[0.08]">
      
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Selected Portfolio
            </div>
            <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white">
              Work that moves markets
            </h2>
          </div>

          <a
            href="https://cal.com/klyph/strategic-consultation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 px-5 py-2.5 rounded-full transition-all w-fit"
          >
            Start a Project →
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-[#080808] border border-white/[0.1] hover:border-white/25 p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-400">
                    {item.cat}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer: Results & Live Link */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    Key Results
                  </div>
                  <div className="text-xs font-medium text-emerald-400">
                    {item.results}
                  </div>
                </div>

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Visit Live Architecture</span>
                    <span className="text-xs">↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
