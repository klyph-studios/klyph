"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgentShowcase } from "@/components/sections/AgentShowcase";
import { ScaleBento } from "@/components/sections/ScaleBento";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { KLYPH_DATA } from "@/lib/data";

export default function ServicesPage() {
  const services = KLYPH_DATA.services;

  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black overflow-hidden font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12 sm:pb-16 text-center max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full-Spectrum Capabilities</span>
        </div>
        <h1 className="font-sans font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.035em] text-white max-w-4xl mx-auto">
          World-Class Craft.
          <span className="block text-zinc-400 mt-2">Uncompromising Performance.</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          From custom Next.js web architecture to autonomous AI systems and executive branding, we build digital infrastructure obsessed with results.
        </p>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="rounded-2xl bg-[#080808] border border-white/[0.1] hover:border-white/20 p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{svc.icon}</span>
                    {svc.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.08] text-zinc-300">
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-sans text-xl font-semibold text-white tracking-tight mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
                    Capabilities:
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {svc.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Architecture Console */}
      <AgentShowcase />

      {/* Why Us Bento */}
      <ScaleBento />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
