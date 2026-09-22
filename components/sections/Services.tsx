"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { KLYPH_DATA } from "@/lib/data";

interface ServicesProps {
  onOpenModal?: (id: string) => void;
}

export function Services({ onOpenModal }: ServicesProps) {
  const services = KLYPH_DATA.services;
  const clientProjects = KLYPH_DATA.projects;
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const postersRef = useRef<HTMLDivElement>(null);

  /*
   * GSAP ScrollTrigger Animation Setup for Services Cards & Posters
   * Staggered fade-up entrance as elements enter scrollport.
   */
  useGSAP(
    () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".svc-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (postersRef.current) {
        const posters = postersRef.current.querySelectorAll(".poster-card");
        gsap.fromTo(
          posters,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: postersRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    [],
    containerRef
  );

  return (
    <section id="services" className="section sec-light py-20 sm:py-32 bg-white text-black border-t border-b border-black/10" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-8 max-w-[1240px]">
        {/* Section Header */}
        <div className="flex flex-wrap justify-between items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="section-tag flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 mb-3 sm:mb-4">
              <span className="w-7 h-[1px] bg-zinc-400 block" />
              What We Architect
              <span className="w-1.5 h-1.5 rounded-full bg-black block" />
            </div>
            <h2 className="headline font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-black">
              Everything You Need to <span className="hi bg-gradient-to-b from-black to-zinc-600 bg-clip-text text-transparent">Scale</span>
            </h2>
          </div>
          <p className="text-zinc-600 max-w-xs text-xs sm:text-sm leading-relaxed">
            From bespoke web architecture to cinema motion pipelines and AI systems — Klyph handles the full stack of your digital presence.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="svc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={cardsRef}>
          {services.map((s) => (
            <div
              className="svc-card group bg-white border border-black/10 rounded-2xl p-6 sm:p-8 transition-all duration-400 hover:-translate-y-2 hover:border-black/30 hover:shadow-2xl relative overflow-hidden"
              key={s.id}
            >
              {/* Glass sheen sweeping across card on hover */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-700 group-hover:left-full pointer-events-none" />

              <div className="svc-head flex items-center justify-between pb-5 sm:pb-6 border-b border-black/10 mb-5 sm:mb-6">
                <div className="svc-ico w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl bg-zinc-100 border border-black/10 text-black">
                  {s.icon}
                </div>
                {s.badge && (
                  <span className="svc-badge text-[10px] font-bold font-syne tracking-wider uppercase px-3 py-1 rounded-full bg-black text-white">
                    {s.badge}
                  </span>
                )}
              </div>

              <div className="svc-body">
                <h3 className="svc-title font-syne font-extrabold text-lg sm:text-xl mb-3 text-black">{s.title}</h3>
                <p className="svc-desc text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">{s.desc}</p>
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

        {/* Live Client Deployments & Posters Showcase inside Services */}
        <div className="mt-20 sm:mt-28 pt-14 sm:pt-20 border-t border-black/10" id="live-deployments">
          <div className="flex flex-wrap justify-between items-end mb-10 sm:mb-14 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 mb-3">
                <span className="w-7 h-[1px] bg-zinc-400 block" />
                Active Client Deployments & Posters
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping block" />
              </div>
              <h3 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
                Live Platforms in <span className="bg-gradient-to-b from-black to-zinc-600 bg-clip-text text-transparent">Production</span>
              </h3>
            </div>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-md leading-relaxed">
              Explore real-world platforms engineered by Klyph across construction, aviation, luxury hospitality, education, studios, and manufacturing. Click any live poster to explore the deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={postersRef}>
            {clientProjects.map((p) => (
              <div
                key={p.id}
                className="poster-card group bg-zinc-950 text-white border border-white/10 rounded-2xl p-5 sm:p-7 transition-all duration-400 hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-colors" />

                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-bold font-syne uppercase tracking-widest text-emerald-400">
                        Live Demo
                      </span>
                    </div>
                    <span className="text-[10px] font-bold font-syne uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-zinc-300">
                      {p.cat}
                    </span>
                  </div>

                  {/* Brand & Emoji */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <span className="text-3xl p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {p.emoji}
                    </span>
                    <div>
                      <h4 className="font-syne font-extrabold text-xl text-white group-hover:text-zinc-200 transition-colors">
                        {p.name.split("—")[0].trim()}
                      </h4>
                      <p className="text-xs text-zinc-400 font-medium">
                        {p.name.includes("—") ? p.name.split("—")[1].trim() : p.cat}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-live inline-flex items-center gap-2 text-xs font-syne font-bold px-4 py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all uppercase tracking-wider shadow-sm"
                    >
                      Visit Live Site ↗
                    </a>
                  )}

                  {onOpenModal && (
                    <button
                      type="button"
                      onClick={() => onOpenModal(p.id)}
                      className="text-xs font-syne font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                      Details →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

