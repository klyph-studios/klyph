"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { KLYPH_DATA } from "@/lib/data";

export function Hero() {
  const h = KLYPH_DATA.hero;
  const containerRef = useRef<HTMLDivElement>(null);
  const titleBoxRef = useRef<HTMLDivElement>(null);
  const fillTextRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  /* 
   * GSAP ScrollTrigger Animation Setup for Pinned KLYPH Kinetic Reveal
   * Uses useGSAP hook for automatic context cleanup on unmount/re-render.
   */
  useGSAP(
    () => {
      if (!titleBoxRef.current || !fillTextRef.current) return;

      // Create a GSAP Timeline scrubbed to page scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",      // Animation triggers when top of hero hits viewport top
          end: "+=600",          // Scroll distance over which the animation scrubs
          scrub: 0.6,            // Smooth momentum scrubbing (0.6 seconds lag catch-up)
          pin: false,            // Clean scroll progress without rigid locking
        },
      });

      // 1. Expand letter-spacing & scale title box
      tl.to(
        titleBoxRef.current,
        {
          scale: 1.14,
          ease: "power2.out",
        },
        0
      );

      // 2. Scrub clip-path to reveal solid metallic fill over outline
      tl.to(
        fillTextRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
        },
        0
      );

      // 3. Fade in subtext caption
      if (subTextRef.current) {
        tl.to(
          subTextRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
          },
          0.2
        );
      }
    },
    [],
    containerRef
  );

  return (
    <section id="home" className="hero section relative min-h-screen pt-28 pb-16 bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Background Grid & Radial Lighting */}
      <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="hb hb1 absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-[140px] -top-48 -left-48 pointer-events-none" />
      <div className="hb hb2 absolute w-[500px] h-[500px] rounded-full bg-white/3 blur-[120px] -bottom-36 -right-24 pointer-events-none" />

      <div className="container mx-auto px-8 max-w-[1240px]">
        {/* Main Hero Layout */}
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-16 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-xs font-syne font-semibold tracking-wider mb-7 text-white">
              <div className="bping w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>
              {h.badge}
            </div>

            <h1 className="hero-h1 font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-6">
              {h.line1}
              <span className="line2 block bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                {h.line2}
              </span>
            </h1>

            <p className="hero-sub text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">{h.sub}</p>

            <div className="hero-btns flex flex-wrap gap-4 mb-14">
              <button
                className="btn btn-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded bg-white text-black hover:bg-zinc-200 transition-all shadow-lg shadow-white/10"
                onClick={() => go("work")}
              >
                Explore Work →
              </button>
              <button
                className="btn btn-cyan text-xs uppercase font-bold tracking-widest px-8 py-4 rounded border border-white/30 text-white hover:bg-white/10 transition-all"
                onClick={() => go("cta")}
              >
                Book Consultation
              </button>
            </div>

            <div className="hero-metrics flex flex-wrap gap-12 pt-8 border-t border-white/10">
              {h.metrics.map((m, i) => (
                <div key={i}>
                  <div className="mval font-syne font-extrabold text-3xl sm:text-4xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                    {m.val}
                  </div>
                  <div className="mlbl text-xs text-zinc-400 mt-1 tracking-wider">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Orbit Graphics */}
          <div className="hero-vis hidden lg:flex items-center justify-center relative">
            <div className="orbit relative w-[440px] h-[440px] flex items-center justify-center">
              <div className="oring r1 absolute w-[440px] h-[440px] rounded-full border border-white/10 animate-spin-slow" />
              <div className="oring r2 absolute w-[330px] h-[330px] rounded-full border border-dashed border-white/15 animate-spin-reverse" />
              <div className="oring r3 absolute w-[220px] h-[220px] rounded-full border border-white/10" />

              <div className="orb w-40 h-40 rounded-full z-10 glass-dark flex flex-col items-center justify-center gap-2 animate-float">
                <div className="orb-brand font-syne font-extrabold text-xl text-white tracking-widest">KLYPH</div>
                <div className="orb-sub text-[10px] text-zinc-400 tracking-widest uppercase">Bespoke Studio</div>
              </div>
            </div>

            {/* Floating Client Badges */}
            <div className="fc fc1 absolute top-4 -right-8 glass-dark rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="text-xl">🦜</div>
              <div>
                <div className="font-syne font-bold text-xs text-white">AeroAvian Breeder Studio</div>
                <div className="text-[11px] text-zinc-400">Global Booking Platform</div>
              </div>
            </div>

            <div className="fc fc2 absolute bottom-8 -left-10 glass-dark rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="text-xl">🏎️</div>
              <div>
                <div className="font-syne font-bold text-xs text-white">Velocita Supercar Shop</div>
                <div className="text-[11px] text-zinc-400">GSAP & Motion Assets</div>
              </div>
            </div>

            <div className="fc fc3 absolute top-1/2 -right-12 glass-dark rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="text-xl">🚁</div>
              <div>
                <div className="font-syne font-bold text-xs text-white">RotorLuxe Helicopters</div>
                <div className="text-[11px] text-zinc-400">VIP Charter Engine</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Responsive GSAP ScrollTrigger KLYPH Kinetic Reveal Banner */}
        <div className="klyph-reveal-wrapper mt-20 pt-16 pb-12 border-t border-b border-white/10 bg-radial from-white/5 to-transparent w-full overflow-hidden">
          <div className="klyph-reveal-container flex flex-col items-center justify-center text-center relative w-full">
            <div className="klyph-reveal-tag font-syne text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6 flex items-center gap-3">
              KLYPH REVEAL // GSAP + SCROLLTRIGGER
            </div>

            <div className="klyph-reveal-title-box relative inline-block select-none w-full overflow-hidden" ref={titleBoxRef}>
              {/* Outline Typography */}
              <div className="klyph-reveal-text outline font-syne font-extrabold text-[clamp(2.8rem,13vw,12rem)] leading-none uppercase tracking-widest text-transparent [webkit-text-stroke:1.5px_rgba(255,255,255,0.2)]">
                KLYPH
              </div>

              {/* Solid Fill Revealed by GSAP ScrollTrigger */}
              <div
                className="klyph-reveal-text fill absolute inset-0 font-syne font-extrabold text-[clamp(2.8rem,13vw,12rem)] leading-none uppercase tracking-widest bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
                ref={fillTextRef}
                style={{ clipPath: "polygon(0% 0%, 20% 0%, 20% 100%, 0% 100%)" }}
              >
                KLYPH
              </div>
            </div>

            <div className="klyph-reveal-sub flex items-center justify-center gap-4 mt-8 opacity-40 transition-opacity" ref={subTextRef}>
              <span className="sub-line w-16 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <span className="sub-text font-syne text-xs sm:text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase">
                ULTRA-PREMIUM DIGITAL STUDIO
              </span>
              <span className="sub-line w-16 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
