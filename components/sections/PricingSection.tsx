"use client";

import React from "react";
import { KLYPH_DATA } from "@/lib/data";

export function PricingSection() {
  const tiers = [
    {
      title: "Starter Launchpad",
      price: "$299",
      sub: "one-time investment",
      goodFor:
        "Fast-moving founders and service pilots needing an ultra-clean, high-converting landing page delivered in 3–5 days.",
      whatYouGet: [
        "High-converting bespoke landing page",
        "Next.js App Router architecture",
        "Best UI/UX design (zero boring templates)",
        "Mobile & tablet responsive perfection",
        "Essential on-page SEO schema",
        "Turnaround in 3–5 business days",
      ],
      ctaText: "Get Started — $299",
      ctaHref: "https://cal.com/klyph/strategic-consultation",
      popular: false,
    },
    {
      title: "Growth Engine",
      price: "$599",
      sub: "one-time investment",
      goodFor:
        "Growing brands and scaling companies ready to replace boring websites with a real money machine that drives inquiries.",
      whatYouGet: [
        "All the benefits of Starter Launchpad",
        "Up to 5 custom-engineered pages",
        "60FPS GSAP micro-interactions & motion",
        "Technical SEO dominance & fast indexing",
        "Core Web Vitals 95+ speed guarantee",
        "Rapid 5–7 day delivery sprint",
        "30 days dedicated post-launch support",
      ],
      ctaText: "Build Your Machine — $599",
      ctaHref: "https://cal.com/klyph/strategic-consultation",
      popular: true,
    },
    {
      title: "Market Dominator",
      price: "$1,299",
      sub: "one-time investment",
      goodFor:
        "Established businesses and luxury brands demanding category dominance, custom 3D motion, and enterprise-grade performance.",
      whatYouGet: [
        "Full multi-page custom web architecture",
        "Custom 3D & ambient canvas visuals",
        "Autonomous AI system & model gateway",
        "Direct VIP booking or e-commerce engine",
        "Aggressive SEO architecture & schema",
        "Dedicated senior designer + developer squad",
        "Priority SLA delivery & 60 days retainer",
      ],
      ctaText: "Scale to Dominance — $1,299",
      ctaHref: "https://cal.com/klyph/strategic-consultation",
      popular: false,
    },
    {
      title: "Custom Architecture",
      price: "Custom",
      sub: "tailored to your scope",
      goodFor:
        "Enterprises needing complex bespoke integrations, custom AI pipelines, or high-volume custom web applications.",
      whatYouGet: [
        "Dedicated senior full-stack developer squad",
        "Custom APIs, database & backend architecture",
        "Tailored autonomous AI workflows & models",
        "White-glove SLA with 4-hour response guarantee",
        "Direct email to sales: outreach@klyphconnect.com",
        "Priority executive phone & video access",
      ],
      ctaText: "Contact Sales Team →",
      ctaHref: `mailto:${KLYPH_DATA.cta.email}?subject=Custom%20Website%20Architecture%20Inquiry`,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/[0.08]">
      
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Unbeatable Pricing
          </div>
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white">
            We build money machines.
            <span className="block text-zinc-400">Not boring websites.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Best UI designers. Best SEO. Best senior developers. Built significantly faster to convert visitors into paying clients.
          </p>
        </div>

        {/* 4-Column Pricing Grid matching Screenshot Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-[#080808] border border-white/[0.12] divide-y md:divide-y-0 md:divide-x divide-white/[0.1] shadow-2xl overflow-hidden">
          {tiers.map((t, idx) => (
            <div
              key={t.title}
              className={`p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 relative ${
                t.popular ? "bg-white/[0.03]" : "bg-transparent hover:bg-white/[0.015]"
              }`}
            >
              {/* Optional Most Popular Ribbon */}
              {t.popular && (
                <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-black font-bold">
                  Most Popular
                </div>
              )}

              <div>
                {/* 1. Title */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight mb-6">
                  {t.title}
                </h3>

                {/* 2. Price */}
                <div className="mb-2">
                  <div className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                    {t.price}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-sans">
                    {t.sub}
                  </div>
                </div>

                {/* 3. "Good for:" Box matching Screenshot Callout */}
                <div className="my-6 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="font-sans font-bold text-xs text-white mb-1.5">
                    Good for:
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {t.goodFor}
                  </p>
                </div>

                {/* 4. "What you get:" List */}
                <div className="mt-6 mb-8">
                  <div className="font-sans font-bold text-xs text-white mb-4">
                    What you get:
                  </div>
                  <ul className="space-y-3 text-xs text-zinc-300">
                    {t.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-snug">
                        {/* Circular Checkmark Icon */}
                        <div className="w-4 h-4 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="2.5 6 5 8.5 9.5 3.5" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 5. CTA Button */}
              <div className="pt-6 border-t border-white/[0.08] mt-6">
                <a
                  href={t.ctaHref}
                  target={t.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={t.ctaHref.startsWith("http") ? "noreferrer" : undefined}
                  className={`block w-full py-3.5 rounded-full text-center text-xs uppercase tracking-widest font-semibold transition-all duration-200 ${
                    t.popular
                      ? "bg-white hover:bg-zinc-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15"
                  }`}
                >
                  {t.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Highlights Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/[0.08] text-center">
          <div>
            <div className="font-sans font-bold text-xl sm:text-2xl text-white">⚡ Rapid Delivery</div>
            <div className="text-xs text-zinc-500 mt-1">Built faster without cutting corners</div>
          </div>
          <div>
            <div className="font-sans font-bold text-xl sm:text-2xl text-white">🎨 Best UI Designers</div>
            <div className="text-xs text-zinc-500 mt-1">Award-winning, non-boring aesthetics</div>
          </div>
          <div>
            <div className="font-sans font-bold text-xl sm:text-2xl text-white">🔍 Best SEO Dominance</div>
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
