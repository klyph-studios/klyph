"use client";

import React from "react";

export function ScaleBento() {
  const bentoItems = [
    {
      tag: "Global Network",
      title: "Edge compute at the speed of thought",
      desc: "Static assets and dynamic agent routing deployed across 300+ global edge locations with sub-10ms response times.",
      stat: "300+",
      statLabel: "Edge PoPs",
      colSpan: "lg:col-span-7",
    },
    {
      tag: "Sandboxes",
      title: "Ephemeral microVM containers",
      desc: "Hardware-isolated execution environments booted on-demand in milliseconds for untrusted agent code.",
      stat: "<10ms",
      statLabel: "Cold Boot",
      colSpan: "lg:col-span-5",
    },
    {
      tag: "Observability",
      title: "Full-lifecycle agent telemetry",
      desc: "Inspect every token stream, tool execution, and state checkpoint with zero-overhead distributed tracing.",
      stat: "100%",
      statLabel: "Trace Fidelity",
      colSpan: "lg:col-span-5",
    },
    {
      tag: "Reliability",
      title: "Atomic rollouts & zero-downtime rollbacks",
      desc: "Every git commit generates an immutable preview. Instant instant production promotions with continuous health guards.",
      stat: "99.99%",
      statLabel: "Global SLA",
      colSpan: "lg:col-span-7",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header matching Screenshot 3 bottom */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.035em] text-white max-w-4xl">
            Ship apps that scale
            <span className="block text-zinc-400">from first commit to billions of requests</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {bentoItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.colSpan} relative rounded-2xl bg-[#080808] border border-white/[0.1] p-7 sm:p-9 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group overflow-hidden`}
            >
              {/* Subtle top specular sheen */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item.tag}
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
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
