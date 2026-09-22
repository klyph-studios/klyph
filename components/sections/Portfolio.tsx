"use client";

import { useState, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { KLYPH_DATA, ProjectItem } from "@/lib/data";

interface PortfolioProps {
  onOpenModal: (id: string) => void;
}

export function Portfolio({ onOpenModal }: PortfolioProps) {
  const projects = KLYPH_DATA.projects;
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const visible = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  /*
   * GSAP ScrollTrigger Animation Setup for Portfolio Items
   * Adds smooth entrance animation and interactive hover scale.
   */
  useGSAP(
    () => {
      if (!gridRef.current) return;
      const items = gridRef.current.querySelectorAll(".port-item");

      gsap.fromTo(
        items,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    [filter],
    containerRef
  );

  return (
    <section id="work" className="section sec-light py-20 sm:py-32 bg-white text-black border-t border-b border-black/10" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-8 max-w-[1240px]">
        <div className="flex flex-wrap justify-between items-center mb-8 sm:mb-12 gap-6">
          <div>
            <div className="section-tag flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 mb-3 sm:mb-4">
              <span className="w-7 h-[1px] bg-zinc-400 block" />
              Portfolio & Case Studies
              <span className="w-1.5 h-1.5 rounded-full bg-black block" />
            </div>
            <h2 className="headline font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-black">
              Work We're <span className="hi bg-gradient-to-b from-black to-zinc-600 bg-clip-text text-transparent">Proud Of</span>
            </h2>
          </div>
          <button
            className="btn btn-ghost text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded border border-black/20 text-black hover:bg-black hover:text-white transition-all"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project →
          </button>
        </div>

        {/* Filter Category Pills */}
        <div className="port-filters flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
          {cats.map((c) => (
            <button
              key={c}
              className={`flt-btn text-[11px] sm:text-xs font-bold font-syne px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all border ${
                filter === c ? "bg-black text-white border-black shadow-md" : "bg-zinc-100 text-zinc-600 border-black/10 hover:border-black/30"
              }`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="port-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" ref={gridRef}>
          {visible.map((p) => (
            <div
              key={p.id}
              className="port-item group bg-white border border-black/10 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:border-black transition-all duration-400 flex flex-col justify-between"
              onClick={() => onOpenModal(p.id)}
            >
              <div>
                <div className="port-thumb h-64 bg-zinc-950 flex items-center justify-center relative overflow-hidden text-6xl">
                  <span className="group-hover:scale-125 transition-transform duration-500">{p.emoji}</span>
                  <div className="port-ov absolute inset-0 bg-black/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="port-ov-ttl font-syne font-bold text-white text-lg mb-2">{p.name}</div>
                    <p className="text-zinc-400 text-xs line-clamp-2 mb-4">{p.desc}</p>
                    <div className="flex items-center gap-3">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-syne font-bold px-4 py-2 rounded bg-white text-black hover:bg-zinc-200 transition-all uppercase tracking-wider"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Site ↗
                        </a>
                      )}
                      <button
                        className="text-xs font-bold font-syne text-white uppercase tracking-wider underline underline-offset-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenModal(p.id);
                        }}
                      >
                        Case Study →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="port-meta p-6 bg-zinc-50 border-t border-black/10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="port-tags text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                      {p.tags}
                    </div>
                    {p.liveUrl && (
                      <span className="flex items-center gap-1.5 text-[10px] font-syne font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="port-name font-syne font-extrabold text-xl text-black mb-3">{p.name}</h3>
                  <p className="text-zinc-600 text-xs line-clamp-2 mb-4">{p.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0 bg-zinc-50">
                <div className="port-results text-xs font-medium text-black bg-zinc-200/60 p-3 rounded-lg border border-black/5 mb-4">
                  {p.results}
                </div>
                
                {p.liveUrl && (
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-syne font-bold text-black hover:text-zinc-600 flex items-center gap-1.5 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Live Platform ↗
                    </a>
                    <span className="text-xs text-zinc-400 font-syne">View Details →</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
