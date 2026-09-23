"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    icon: "💬",
    title: "Tell Us About Your Business",
    desc: "Share your business name, services, logo, and a few details about what you do. Takes less than 5 minutes.",
  },
  {
    num: "02",
    icon: "🛠️",
    title: "We Build Your Demo",
    desc: "Our team creates a professional website concept designed specifically for your business — at zero cost to you.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "See It. Review It. Decide.",
    desc: "We show you the live demo. If you love it, we turn it into your complete website. No pressure if you don't.",
  },
];

export function WhatWeOffer() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".wwo-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      )
        .fromTo(
          ".wwo-headline",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".wwo-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".wwo-divider",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.out", transformOrigin: "left center" },
          "-=0.3"
        )
        .fromTo(
          ".wwo-step",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".wwo-cta-wrap",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  const scrollToContact = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-offer"
      className="relative py-24 sm:py-36 bg-black text-white overflow-hidden border-t border-white/10"
    >
      {/* Background grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 sm:px-8 max-w-[1240px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="wwo-badge inline-flex items-center gap-3 font-syne text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 mb-5">
            <span className="w-7 h-[1px] bg-zinc-500 block" />
            What We Offer
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
          </div>

          <h2 className="wwo-headline font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-tight">
            See Your Website{" "}
            <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              Before You Pay
            </span>
          </h2>

          <p className="wwo-sub text-zinc-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Most web agencies ask for payment before you even know what you&apos;re getting.{" "}
            <span className="text-white font-semibold">We&apos;re different.</span> We build a free
            demo website for your business so you can see exactly how your brand could look online
            — before you commit to anything.
          </p>

          <div className="wwo-divider w-16 h-[2px] bg-white/30 mx-auto mt-10" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="wwo-step group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 sm:p-9 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-500"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/20 z-20"
                />
              )}

              {/* Step number */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-syne text-5xl font-extrabold text-white/10 select-none leading-none">
                  {step.num}
                </span>
                <span className="text-3xl">{step.icon}</span>
              </div>

              <h3 className="font-syne font-bold text-lg sm:text-xl text-white mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="wwo-cta-wrap relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left overflow-hidden">
          {/* Inner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-[0.07]"
            style={{ background: "white" }}
          />

          <div className="relative z-10">
            <p className="font-syne font-bold text-xl sm:text-2xl text-white mb-2">
              Ready to see your brand come alive?
            </p>
            <p className="text-zinc-400 text-sm">
              No upfront cost. No commitment. Just an honest look at what we can build for you.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="relative z-10 shrink-0 font-syne font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg bg-white text-black hover:bg-zinc-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            Get My Free Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
