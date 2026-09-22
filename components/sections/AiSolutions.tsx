"use client";

import { KLYPH_DATA } from "@/lib/data";

export function AiSolutions() {
  const ai = KLYPH_DATA.whyUs; // Or AI data object

  return (
    <section id="ai" className="section sec-dark py-20 sm:py-32 bg-black text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1240px]">
        <div className="text-center mb-12 sm:mb-16">
          <div className="section-tag inline-flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 mb-3 sm:mb-4 justify-center">
            <span className="w-7 h-[1px] bg-zinc-500 block" />
            AI Engineering & Autonomous Agents
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
          </div>
          <h2 className="headline font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            Autonomous Systems for <span className="hi bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Market Leaders</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed mt-4">
            Supercharge operations with custom AI tools, voice receptionist agents, and automated client booking workflows.
          </p>
        </div>

        <div className="ai-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="ai-inner glass-dark rounded-2xl p-6 sm:p-10 relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-white/30">
            <div className="ai-glow absolute top-0 right-0 w-52 h-52 rounded-full bg-white/10 blur-[70px] pointer-events-none" />
            <div className="ai-tag text-[11px] sm:text-xs font-bold font-syne tracking-widest text-zinc-400 uppercase mb-4">Workflow Systems</div>
            <h3 className="ai-ttl font-syne font-extrabold text-xl sm:text-2xl mb-3 sm:mb-4 text-white">Autonomous Workflows</h3>
            <p className="ai-desc text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              Eliminate repetitive manual tasks. Custom AI pipelines executing complex operations on autopilot — client reservations, CRM enrichment, and automated reporting.
            </p>
            <div className="ai-feats flex flex-wrap gap-2">
              {["Client Reservation Automation", "Lead Qualification", "Email & SMS Workflows", "Data Sync", "Automated Insights", "Python / Java API Ready"].map((f, j) => (
                <span className="ai-feat text-[11px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-white" key={j}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="ai-inner glass-dark rounded-2xl p-6 sm:p-10 relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-white/30">
            <div className="ai-glow absolute top-0 right-0 w-52 h-52 rounded-full bg-white/10 blur-[70px] pointer-events-none" />
            <div className="ai-tag text-[11px] sm:text-xs font-bold font-syne tracking-widest text-zinc-400 uppercase mb-4">AI Agents</div>
            <h3 className="ai-ttl font-syne font-extrabold text-xl sm:text-2xl mb-3 sm:mb-4 text-white">Autonomous Voice & Chat Agents</h3>
            <p className="ai-desc text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              A 24/7 intelligent AI agent trained on your proprietary data that handles inquiries, qualifies leads, schedules appointments, and answers client questions.
            </p>
            <div className="ai-feats flex flex-wrap gap-2">
              {["24/7 Active Agent", "Smart Booking", "WhatsApp & Web Chat", "Multi-Language Support", "Sanity CMS Ready"].map((f, j) => (
                <span className="ai-feat text-[11px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-white" key={j}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
