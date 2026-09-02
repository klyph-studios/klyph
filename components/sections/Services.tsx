"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { KLYPH_DATA } from "@/lib/data";

export function Services() {
  const services = KLYPH_DATA.services;
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  /*
   * GSAP ScrollTrigger Animation Setup for Services Cards
   * Staggered fade-up entrance as cards enter scrollport.
   */
  useGSAP(
    () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll(".svc-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",    // Triggers when top of grid enters 80% viewport height
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    [],
    containerRef
  );

  return (
    <section id="services" className="section sec-light py-32 bg-white text-black border-t border-b border-black/10" ref={containerRef}>
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="flex flex-wrap justify-between items-end mb-16 gap-8">
          <div>
            <div className="section-tag flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 mb-4">
              <span className="w-7 h-[1px] bg-zinc-400 block" />
              What We Architect
              <span className="w-1.5 h-1.5 rounded-full bg-black block" />
            </div>
            <h2 className="headline font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-black">
              Everything You Need to <span className="hi bg-gradient-to-b from-black to-zinc-600 bg-clip-text text-transparent">Scale</span>
            </h2>
          </div>
          <p className="text-zinc-600 max-w-xs text-sm leading-relaxed">
            From bespoke web architecture to cinema motion pipelines and AI systems — Klyph handles the full stack of your digital presence.
          </p>
        </div>

        <div className="svc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={cardsRef}>
          {services.map((s) => (
            <div
              className="svc-card group bg-white border border-black/10 rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 hover:border-black/30 hover:shadow-2xl relative overflow-hidden"
              key={s.id}
            >
              {/* Glass sheen sweeping across card on hover */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-700 group-hover:left-full pointer-events-none" />

              <div className="svc-head flex items-center justify-between pb-6 border-b border-black/10 mb-6">
                <div className="svc-ico w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-zinc-100 border border-black/10 text-black">
                  {s.icon}
                </div>
                {s.badge && (
                  <span className="svc-badge text-[10px] font-bold font-syne tracking-wider uppercase px-3 py-1 rounded-full bg-black text-white">
                    {s.badge}
                  </span>
                )}
              </div>

              <div className="svc-body">
                <h3 className="svc-title font-syne font-extrabold text-xl mb-3 text-black">{s.title}</h3>
                <p className="svc-desc text-zinc-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="svc-list flex flex-col gap-2.5 list-none">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-zinc-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
