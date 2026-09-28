"use client";

import React from "react";
import { KLYPH_DATA } from "@/lib/data";

export function ScaleBento() {
  const whyUs = KLYPH_DATA.whyUs;

  const bentoItems = [
    {
      tag: "Architecture",
      title: whyUs.cards[3].title,
      desc: whyUs.cards[3].desc,
      stat: "100%",
      statLabel: "Core Web Vitals",
      colSpan: "lg:col-span-7",
    },
    {
      tag: "Design Philosophy",
      title: whyUs.cards[1].title,
      desc: whyUs.cards[1].desc,
      stat: "60 FPS",
      statLabel: "Fluid Motion",
      colSpan: "lg:col-span-5",
    },
    {
      tag: "Search Authority",
      title: whyUs.cards[2].title,
      desc: whyUs.cards[2].desc,
      stat: "3.4×",
      statLabel: "Organic Visibility",
      colSpan: "lg:col-span-5",
    },
    {
      tag: "Domain Specialization",
      title: whyUs.cards[0].title,
      desc: whyUs.cards[0].desc,
      stat: "5.4×",
      statLabel: "Average Client ROI",
      colSpan: "lg:col-span-7",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            {whyUs.tag}
          </div>
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white max-w-4xl">
            {whyUs.headline1}
            <span className="block text-zinc-400">{whyUs.headline2}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {whyUs.sub}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {bentoItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.colSpan} relative rounded-2xl bg-[#080808] border border-white/[0.1] p-7 sm:p-9 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              {/* Top sheen */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item.tag}
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </div>

              {/* Metric Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-baseline gap-3">
                <span className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  {item.stat}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
