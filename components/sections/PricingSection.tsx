"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KLYPH_DATA } from "@/lib/data";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"one-time" | "retainer">("one-time");

  const pricingTiers = [
    {
      name: "Starter Launchpad",
      price: "$299",
      period: "one-time",
      desc: "Perfect for founders and businesses needing an ultra-clean, high-converting presence fast.",
      badge: "Fast Turnaround",
      features: [
        "Bespoke High-Converting Landing Page",
        "Next.js App Router Architecture",
        "World-Class UI/UX (Zero Boring Templates)",
        "Mobile & Tablet Responsive Mastery",
        "Essential On-Page SEO Architecture",
        "Turnaround in 3–5 Business Days",
        "Direct Lead Form Integration",
      ],
      ctaText: "Get Started — $299",
      popular: false,
      href: "https://cal.com/klyph/strategic-consultation",
    },
    {
      name: "Growth Engine",
      price: "$599",
      period: "one-time",
      desc: "Our most popular package for brands ready to scale revenue and build undeniable market authority.",
      badge: "Most Popular • Money Machine",
      features: [
        "Up to 5 Custom-Engineered Pages",
        "60FPS GSAP Micro-Interactions & Motion",
        "Technical SEO Dominance & Fast Indexing",
        "Core Web Vitals 95+ Guarantee",
        "Conversion-Optimized Sales Copy Review",
        "Interactive Booking or Lead Portal",
        "Rapid 5–7 Day Delivery Sprint",
        "30 Days Dedicated Post-Launch Support",
      ],
      ctaText: "Build Your Money Machine",
      popular: true,
      href: "https://cal.com/klyph/strategic-consultation",
    },
    {
      name: "Market Dominator",
      price: "$1,299",
      period: "one-time",
      desc: "Full-scale custom digital architecture designed to dominate your category and outclass competitors.",
      badge: "Category Dominance",
      features: [
        "Full Multi-Page Enterprise Architecture",
        "Custom 3D / Ambient WebGL & Canvas Visuals",
        "Autonomous AI System / Model Gateway Integration",
        "Direct VIP Booking or High-Ticket E-Commerce",
        "Aggressive SEO Architecture & Schema Mastery",
        "Dedicated Senior Designer & Developer Squad",
        "Priority Sprint Delivery",
        "60 Days Direct SLA & Performance Retainer",
      ],
      ctaText: "Scale to Enterprise — $1,299",
      popular: false,
      href: "https://cal.com/klyph/strategic-consultation",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/[0.08]">
      
      {/* Background radial spotlight */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Transparent Pricing
          </div>
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white">
            We build money machines.
            <span className="block text-zinc-400">Not boring websites.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            World-class UI design, best-in-class SEO, and senior full-stack development engineered for speed and maximum revenue yield.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl flex flex-col justify-between p-7 sm:p-9 transition-all duration-300 ${
                tier.popular
                  ? "bg-[#0b0b0b] border-2 border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.12)] scale-[1.02] z-10"
                  : "bg-[#080808] border border-white/[0.1] hover:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {tier.name}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    tier.popular
                      ? "bg-white text-black font-bold"
                      : "bg-white/[0.06] border border-white/10 text-zinc-300"
                  }`}
                >
                  {tier.badge}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    /{tier.period}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              {/* Feature List */}
              <div className="pt-6 border-t border-white/[0.08] my-6 flex-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  Included In Delivery:
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-emerald-400 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={tier.href}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 rounded-full text-center text-xs uppercase tracking-widest font-semibold transition-all duration-200 ${
                  tier.popular
                    ? "bg-white hover:bg-zinc-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                    : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15"
                }`}
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Custom Architecture Card (Connect with Sales Team) */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0d0d0d] via-[#111111] to-[#0a0a0a] border border-white/[0.15] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-zinc-300 mb-4">
              <span>👑</span>
              <span>Enterprise & Custom Web Architecture</span>
            </div>
            <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-white tracking-tight mb-2">
              Need a completely bespoke, custom web architecture?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              If your organization requires a tailor-made platform, bespoke CRM/ERP integrations, complex 3D WebGL workflows, or dedicated monthly growth engineering — connect directly with our sales & development team. We build faster, cleaner, and with relentless focus on ROI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`mailto:${KLYPH_DATA.cta.email}?subject=Custom%20Website%20Architecture%20Inquiry`}
              className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full transition-all text-center shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Email Us Directly →
            </a>
            <a
              href="https://cal.com/klyph/strategic-consultation"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full transition-all text-center"
            >
              Book 30-Min Strategy Call
            </a>
          </div>
        </div>

        {/* Value Proposition Highlights Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/[0.08] text-center">
          <div>
            <div className="font-sans font-bold text-xl sm:text-2xl text-white">⚡ Rapid Delivery</div>
            <div className="text-xs text-zinc-500 mt-1">Built faster without cutting corners</div>
          </div>
          <div>
            <div className="font-sans font-bold text-xl sm:text-2xl text-white">🎨 Elite UI Design</div>
            <div className="text-xs text-zinc-500 mt-1">Award-winning, non-boring aesthetics</div>
          </div>
          <div>
            <div className="font-sans font-bold text-xl sm:text-2xl text-white">🔍 Best-in-Class SEO</div>
            <div className="text-xs text-zinc-500 mt-1">Technical schema & speed dominance</div>
          </div>
          <div>
            <div className="font-sans font-bold text-xl sm:text-2xl text-white">💰 Money Machine</div>
            <div className="text-xs text-zinc-500 mt-1">Obsessively engineered for high yield</div>
          </div>
        </div>

      </div>
    </section>
  );
}
