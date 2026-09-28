"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { KLYPH_DATA } from "@/lib/data";

export default function PricingPage() {
  const faqs = [
    {
      q: "How fast can you deliver my website?",
      a: "Our Starter Launchpad ($299) is delivered within 3 to 5 business days. The Growth Engine ($599) takes 5 to 7 days, and full custom architectures ($1,299+) typically take 10 to 14 days with priority sprints.",
    },
    {
      q: "What makes your websites 'Money Machines'?",
      a: "Most agencies build pretty but passive online brochures. We build conversion architectures: lightning-fast Next.js code, strategic psychological hierarchy, frictionless booking flows, and technical SEO schema that turns casual visitors into high-paying clients.",
    },
    {
      q: "Can I connect custom domains and analytics?",
      a: "Yes. Every single build is deployed with DNS configuration on Vercel or your hosting platform of choice, free SSL certificates, automated deployments, and custom event analytics.",
    },
    {
      q: "What if I need custom features or continuous ongoing updates?",
      a: "For bespoke integrations, CRM synchronizations, or monthly growth sprints, reach out directly to our team at outreach@klyphconnect.com or book a private strategy call.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black overflow-hidden font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-12 sm:pb-16 text-center max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Simple, Transparent Investment</span>
        </div>
        <h1 className="font-sans font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.035em] text-white max-w-4xl mx-auto">
          Built faster. Designed better.
          <span className="block text-zinc-400 mt-2">Engineered to make you money.</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          No generic templates. No amateur developers. Choose the plan that fits your growth ambitions, or contact our sales team for enterprise solutions.
        </p>
      </section>

      {/* Pricing Cards */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-black text-white border-t border-white/[0.08]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Everything you need to know about working with Klyph.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-[#080808] border border-white/[0.1] hover:border-white/20 transition-colors"
              >
                <h3 className="font-sans font-semibold text-base sm:text-lg text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
