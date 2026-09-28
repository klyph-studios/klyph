"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Portfolio } from "@/components/sections/Portfolio";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black overflow-hidden font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12 sm:pb-16 text-center max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Proven Track Record</span>
        </div>
        <h1 className="font-sans font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.035em] text-white max-w-4xl mx-auto">
          Case Studies &
          <span className="block text-zinc-400 mt-2">Selected Architecture</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Explore our client builds across VIP aviation, luxury hospitality, commercial construction, fine flooring, photo studios, and chartered accounting.
        </p>
      </section>

      {/* Logos Strip */}
      <CompanyMarquee />

      {/* Portfolio Grid */}
      <Portfolio />

      {/* Verified Client Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
