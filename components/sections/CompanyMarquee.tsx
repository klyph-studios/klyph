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
  const logos = [
    { id: "blackbox", Component: LogoBlackbox },
    { id: "schwab", Component: LogoCharlesSchwab },
    { id: "doordash", Component: LogoDoorDash },
    { id: "openai", Component: LogoOpenAI },
    { id: "supreme", Component: LogoSupreme },
    { id: "weather", Component: LogoWeatherCompany },
    { id: "polymarket", Component: LogoPolymarket },
    { id: "notion", Component: LogoNotion },
  ];

  const repeated = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-12 sm:py-16 bg-black overflow-hidden border-t border-b border-white/[0.08]">
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-black to-transparent" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="flex items-center gap-12 sm:gap-20 shrink-0 animate-marquee hover:[animation-play-state:paused] py-2">
          {repeated.map((item, index) => {
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
    </section>
  );
}
