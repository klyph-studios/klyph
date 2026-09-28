"use client";

import React from "react";
import {
  LogoBlackbox,
  LogoCharlesSchwab,
  LogoDoorDash,
  LogoOpenAI,
  LogoSupreme,
  LogoWeatherCompany,
  LogoPolymarket,
  LogoNotion,
} from "@/components/ui/BrandLogos";

export function CompanyMarquee() {
  const stockLogos = [
    { id: "blackbox", Component: LogoBlackbox },
    { id: "schwab", Component: LogoCharlesSchwab },
    { id: "doordash", Component: LogoDoorDash },
    { id: "openai", Component: LogoOpenAI },
    { id: "supreme", Component: LogoSupreme },
    { id: "weather", Component: LogoWeatherCompany },
    { id: "polymarket", Component: LogoPolymarket },
    { id: "notion", Component: LogoNotion },
  ];

  const clientBrands = [
    { name: "ENLITE HELICOPTERS", tag: "VIP Aviation" },
    { name: "VEERA RESIDENCY", tag: "Luxury Hospitality" },
    { name: "SMN INFRASTRUCTURE", tag: "Heavy Engineering" },
    { name: "ROYAL RUGS", tag: "Artisanal Flooring" },
    { name: "BLACK LENS STUDIO", tag: "Cinema & Photo" },
    { name: "EDWIN CHATER", tag: "CA Advisory" },
    { name: "VALPO BUILDERS", tag: "Urban Construction" },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-black overflow-hidden border-t border-b border-white/[0.08]">
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-black to-transparent" />

      {/* Row 1: Authentic Stock Partner / Tech Logos */}
      <div className="flex overflow-hidden select-none mb-6">
        <div className="flex items-center gap-12 sm:gap-20 shrink-0 animate-marquee hover:[animation-play-state:paused] py-2">
          {[...stockLogos, ...stockLogos, ...stockLogos].map((item, index) => {
            const Logo = item.Component;
            return (
              <div
                key={`${item.id}-${index}`}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer shrink-0"
              >
                <Logo />
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Klyph Client Brands in Clean Monochrome Typography */}
      <div className="flex overflow-hidden select-none opacity-50 hover:opacity-80 transition-opacity">
        <div className="flex items-center gap-10 sm:gap-16 shrink-0 animate-marquee hover:[animation-play-state:paused] py-1 [animation-direction:reverse]">
          {[...clientBrands, ...clientBrands, ...clientBrands].map((c, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0 text-zinc-400 hover:text-white transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="font-sans font-bold text-xs uppercase tracking-widest">{c.name}</span>
              <span className="text-[10px] text-zinc-600 font-mono tracking-normal">[{c.tag}]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
