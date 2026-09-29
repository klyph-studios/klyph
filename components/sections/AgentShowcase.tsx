"use client";

import React, { useState } from "react";

export function AgentShowcase() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedResponse, setTypedResponse] = useState<string | null>(null);

  const quickPrompts = [
    {
      id: "web",
      icon: (
        <span className="font-sans text-xs font-bold text-zinc-300">🌐</span>
      ),
      label: "Bespoke Next.js Architecture",
      sampleResponse:
        "Engineered with Next.js App Router, GSAP ScrollTrigger, and Lenis smooth scrolling. First load JS under 95kB with 100/100 Core Web Vitals globally.",
    },
    {
      id: "vip",
      icon: (
        <span className="font-sans text-xs font-bold text-zinc-300">🚁</span>
      ),
      label: "VIP Booking & Reservation Engine",
      sampleResponse:
        "Dynamic charter scheduler deployed for Enlite Helicopters. Direct fleet availability, instant quote generation, and zero commission leakage.",
    },
    {
      id: "brand",
      icon: (
        <span className="font-sans text-xs font-bold text-zinc-300">👑</span>
      ),
      label: "Executive Brand Authority Pipeline",
      sampleResponse:
        "Comprehensive personal brand ecosystem: bespoke editorial narrative, LinkedIn & X distribution channels, and high-ticket lead capture funnel.",
    },
  ];

  const features = [
    {
      title: "Bespoke Web Architecture",
      description: "Custom Next.js App Router builds engineered for extreme speed, search authority, and cinematic visual presence.",
      metric: "100/100 Vitals",
    },
    {
      title: "GSAP Motion Systems",
      description: "60FPS hardware-accelerated ScrollTrigger animations, kinetic text reveals, and fluid Lenis inertia scrolling.",
      metric: "60 FPS Native",
    },
    {
      title: "Autonomous AI Solutions",
      description: "Custom AI automation pipelines, intelligent model gateways, and customer interaction systems that work 24/7.",
      metric: "Zero Latency",
    },
    {
      title: "Enterprise Conversion Focus",
      description: "Direct booking engines, high-ticket catalogs, and automated lead capture designed obsessively for ROI.",
      metric: "5.4× Avg ROI",
    },
  ];

  const handleSelectPrompt = (prompt: typeof quickPrompts[0]) => {
    setSelectedPrompt(prompt.label);
    setIsTyping(true);
    setTypedResponse(null);

    setTimeout(() => {
      setIsTyping(false);
      setTypedResponse(prompt.sampleResponse);
    }, 350);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
      
      {/* Atmosphere radial backdrop */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Headline matching Vercel aesthetic with Klyph content */}
        <div className="mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            Capabilities & Architecture
          </div>
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white max-w-4xl">
            We build digital experiences
            <span className="block text-zinc-400">that dominate your category</span>
          </h2>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Console Interface */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#080808] border border-white/[0.12] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>Klyph Architecture Console</span>
                </div>

                <div className="flex items-center gap-2.5 text-zinc-500">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Ready</span>
                  </div>
                </div>
              </div>

              {/* Chat Content Body */}
              <div className="space-y-6">
                
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                    <span className="text-white font-bold">✦</span>
                    <span className="font-medium">Client Strategy Suite</span>
                  </div>
                </div>

                {/* Question */}
                <div>
                  <h3 className="font-sans font-medium text-lg sm:text-xl text-white">
                    How would you like to scale your brand?
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">Select an architectural capability to inspect the technical delivery:</p>
                </div>

                {/* Quick Action Suggestion Chips */}
                <div className="flex flex-col gap-2">
                  {quickPrompts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectPrompt(p)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border text-left text-xs transition-all duration-200 cursor-pointer ${
                        selectedPrompt === p.label
                          ? "bg-white/[0.08] border-white/20 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-white/15"
                      }`}
                    >
                      <div className="w-5 flex items-center justify-center">{p.icon}</div>
                      <span className="font-medium">{p.label}</span>
                    </button>
                  ))}
                </div>

                {/* Simulated AI Streaming Output Box */}
                {(isTyping || typedResponse) && (
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-zinc-300 animate-in fade-in duration-200">
                    {isTyping ? (
                      <div className="flex items-center gap-2 text-zinc-500">
                        <span className="inline-block w-2 h-2 rounded-full bg-white/60 animate-ping" />
                        <span>Compiling architecture specs...</span>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <div className="font-semibold text-white flex items-center justify-between">
                          <span>Delivery Specification:</span>
                          <span className="text-[10px] text-zinc-500 font-mono">Bespoke SLA • High-Yield</span>
                        </div>
                        <p>{typedResponse}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Prompt Bar */}
                <div className="rounded-xl bg-[#020202] border border-white/[0.12] p-2.5 flex items-center gap-2">
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.08] border border-white/10 text-xs text-white shrink-0">
                    <span className="text-zinc-500 font-mono">@</span>
                    <span className="text-zinc-300 font-medium">Klyph Studio</span>
                  </div>

                  <input
                    type="text"
                    readOnly
                    value={selectedPrompt ? selectedPrompt : ""}
                    placeholder="Click any solution above to review architecture..."
                    className="bg-transparent border-none text-xs text-white placeholder-zinc-600 focus:outline-none flex-1 px-1 font-sans"
                  />

                  <a
                    href="https://cal.com/klyph/strategic-consultation"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 px-3 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                  >
                    Deploy →
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Features List */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="mb-10">
              <h3 className="font-sans text-2xl sm:text-3xl leading-snug tracking-tight text-zinc-400">
                <strong className="font-bold text-white">Klyph delivers high-yield platforms</strong> for elite companies worldwide.
              </h3>
            </div>

            {/* Features Category Header */}
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Core Disciplines
            </div>

            {/* Features Interactive Stack */}
            <div className="space-y-3">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  onClick={() => setActiveFeature(i)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeFeature === i
                      ? "bg-white/[0.05] border-white/20 text-white"
                      : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/[0.08] text-zinc-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className={`text-base sm:text-lg font-medium tracking-tight ${activeFeature === i ? "text-white" : "text-zinc-300"}`}>
                      {f.title}
                    </h4>
                    {activeFeature === i && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                        {f.metric}
                      </span>
                    )}
                  </div>
                  {activeFeature === i && (
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed animate-in fade-in duration-150">
                      {f.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
