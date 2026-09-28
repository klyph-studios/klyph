"use client";

import React, { useState } from "react";
import { LogoNotion } from "@/components/ui/BrandLogos";

export function AgentShowcase() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedResponse, setTypedResponse] = useState<string | null>(null);

  const quickPrompts = [
    {
      id: "translate",
      icon: (
        <span className="font-serif text-xs font-bold text-zinc-300">A文</span>
      ),
      label: "Translate this page",
      sampleResponse:
        "Translating strategy doc to 14 localized languages via Fluid Compute microVMs. Real-time parity maintained with 99.99% semantic accuracy.",
    },
    {
      id: "analyze",
      icon: (
        <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      label: "Analyze for insights",
      sampleResponse:
        "Identified 3 core growth levers in Q3 roadmap. Synthesis executed across 42 linked team documents in 140ms through AI Gateway.",
    },
    {
      id: "tasks",
      icon: (
        <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      label: "Create a task tracker",
      sampleResponse:
        "Generated durable task pipeline: 8 workstreams assigned, milestone triggers linked to autonomous verification agents.",
    },
  ];

  const features = [
    {
      title: "Durable Orchestration",
      description: "Agents run resilient multi-step workflows with automatic state persistence and fault recovery.",
      metric: "0 lost states",
    },
    {
      title: "Sandboxed Environments",
      description: "Ephemeral microVM containers spin up in <10ms with strict hardware-level isolation.",
      metric: "<10ms boot time",
    },
    {
      title: "AI Model Gateway",
      description: "Universal routing, fallbacks, and caching across Claude, OpenAI, and custom fine-tunes.",
      metric: "99.99% uptime",
    },
    {
      title: "Fluid Compute",
      description: "Dynamic auto-scaling infrastructure tailored specifically for high-concurrency LLM agents.",
      metric: "50k+ req/sec",
    },
  ];

  const handleSelectPrompt = (prompt: typeof quickPrompts[0]) => {
    setSelectedPrompt(prompt.label);
    setIsTyping(true);
    setTypedResponse(null);

    setTimeout(() => {
      setIsTyping(false);
      setTypedResponse(prompt.sampleResponse);
    }, 400);
  };

  return (
    <section id="agent-showcase" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
      
      {/* Atmosphere radial backdrop */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Headline matching Screenshot 2 */}
        <div id="agent-infrastructure" className="mb-16 sm:mb-24">
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white max-w-4xl">
            Build agents on infrastructure
            <span className="block text-zinc-400">that thinks like them</span>
          </h2>
        </div>

        {/* 2-Column Showcase matching Screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive "New AI chat" Card Interface */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#080808] border border-white/[0.12] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                  <span>New AI chat</span>
                  <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                <div className="flex items-center gap-2.5 text-zinc-500">
                  <button className="hover:text-zinc-300 transition-colors p-1" aria-label="Edit chat">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </button>
                  <button className="hover:text-zinc-300 transition-colors p-1" aria-label="Expand window">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                    </svg>
                  </button>
                  <button className="hover:text-zinc-300 transition-colors p-1" aria-label="Close window">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Content Body */}
              <div className="space-y-6">
                
                {/* Notion Strategy Doc Badge & Avatar */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.69c-.467-.373-.98-.606-2.007-.513L2.733 2.155c-.466.047-.56.28-.373.466l2.1 1.587zm.793 4.292v12.457c0 .7.374.933 1.167.887l14.288-.84c.793-.047.887-.607.887-1.12V4.954c0-.606-.233-.886-.84-.84l-14.615.84c-.653.047-.887.327-.887.952v2.594zm11.336-.046c.093.42.093.84-.28.887l-.98.14v7.744c.466.233 1.073.373 1.54.373.84 0 1.493-.42 1.493-1.493V8.874l-1.773-.42zm-5.74.373c.467.047.607.28.607.747v6.67c-.607-.234-1.306-.374-1.96-.374-.84 0-1.26.234-1.493.56v-6.95c0-.467.14-.654.606-.7l2.24-.047v.094z" />
                    </svg>
                    <span className="font-medium">Strategy doc</span>
                  </div>

                  {/* AI Status Indicator */}
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Fluid Compute v2.4</span>
                  </div>
                </div>

                {/* Question Prompt */}
                <div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm mb-3">
                    ✦
                  </div>
                  <h3 className="font-sans font-medium text-lg sm:text-xl text-white">
                    How can I help you today?
                  </h3>
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

                {/* Simulated AI Streaming Output Box if prompt clicked */}
                {(isTyping || typedResponse) && (
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs leading-relaxed text-zinc-300 animate-in fade-in duration-200">
                    {isTyping ? (
                      <div className="flex items-center gap-2 text-zinc-500">
                        <span className="inline-block w-2 h-2 rounded-full bg-white/60 animate-ping" />
                        <span>Orchestrating agent microVM...</span>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <div className="font-semibold text-white flex items-center justify-between">
                          <span>Agent Execution Result:</span>
                          <span className="text-[10px] text-zinc-500 font-mono">140ms • 0 lost state</span>
                        </div>
                        <p>{typedResponse}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Prompt Bar with @ Strategy doc Chip */}
                <div className="rounded-xl bg-[#020202] border border-white/[0.12] p-2.5 flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.08] border border-white/10 text-xs text-white">
                    <span className="text-zinc-500 font-mono">@</span>
                    <span className="text-zinc-300 font-medium">Strategy doc</span>
                  </div>

                  <input
                    type="text"
                    readOnly
                    value={selectedPrompt ? selectedPrompt : ""}
                    placeholder="Ask, search, or make anything..."
                    className="bg-transparent border-none text-xs text-white placeholder-zinc-600 focus:outline-none flex-1 px-1 font-sans"
                  />

                  <button
                    onClick={() => handleSelectPrompt(quickPrompts[0])}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white text-zinc-300 hover:text-black transition-colors"
                    aria-label="Send prompt"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Features List matching Screenshot 3 */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="mb-10">
              <h3 className="font-sans text-2xl sm:text-3xl leading-snug tracking-tight text-zinc-400">
                <strong className="font-bold text-white">Notion powers millions</strong> of agent conversations daily on Vercel.
              </h3>
            </div>

            {/* Features Category Header */}
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Features
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
