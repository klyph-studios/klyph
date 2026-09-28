"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { AgentShowcase } from "@/components/sections/AgentShowcase";
import { ScaleBento } from "@/components/sections/ScaleBento";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black overflow-hidden font-sans">
      <Navbar />
      <Hero />
      <CompanyMarquee />
      <AgentShowcase />
      <ScaleBento />
      <CTA />
      <Footer />
    </main>
  );
}
