"use client";

import React from "react";

/**
 * Authentic monochrome SVG brand logos matching Vercel's real customer ticker
 * (Blackbox.ai, Charles Schwab, DoorDash, OpenAI, Supreme, The Weather Company, Polymarket, Notion)
 */

export function LogoBlackbox({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-white/80 hover:text-white transition-colors ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12L3 7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12l9-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans font-bold tracking-tight text-sm uppercase">BLACKBOX.AI</span>
    </div>
  );
}

export function LogoCharlesSchwab({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center text-white/80 hover:text-white transition-colors ${className}`}>
      <div className="flex flex-col leading-none font-serif tracking-normal">
        <span className="italic font-normal text-xs lowercase tracking-wider opacity-90">charles</span>
        <span className="font-extrabold text-sm uppercase tracking-widest -mt-0.5">SCHWAB</span>
      </div>
    </div>
  );
}

export function LogoDoorDash({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-white/80 hover:text-white transition-colors ${className}`}>
      <svg viewBox="0 0 24 16" fill="currentColor" className="h-4 w-7">
        <path d="M21.5 8c0-3.3-2.7-6-6-6H1.5C0.7 2 0 2.7 0 3.5S0.7 5 1.5 5h14c1.7 0 3 1.3 3 3s-1.3 3-3 3H7.5C6.7 11 6 11.7 6 12.5S6.7 14 7.5 14h8c3.3 0 6-2.7 6-6z" />
      </svg>
      <span className="font-sans font-black tracking-tighter text-sm uppercase">DOORDASH</span>
    </div>
  );
}

export function LogoOpenAI({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-white/80 hover:text-white transition-colors ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22.28 9.53a5.98 5.98 0 0 0-.5-4.48 6.07 6.07 0 0 0-5.74-3.23 6 6 0 0 0-4.32 1.9A6.08 6.08 0 0 0 7.4.77a6.04 6.04 0 0 0-5.26 3.02 5.99 5.99 0 0 0 .74 6.66 6.03 6.03 0 0 0-.5 4.47 6.07 6.07 0 0 0 5.74 3.23 6 6 0 0 0 4.32-1.9 6.08 6.08 0 0 0 4.32 2.95 6.04 6.04 0 0 0 5.26-3.02 5.99 5.99 0 0 0-.74-6.66zm-8.8 11.66a4.48 4.48 0 0 1-2.92-1.07l.15-.09 4.8-2.77a.8.8 0 0 0 .4-.7v-6.8l2.04 1.18a.07.07 0 0 1 .04.05v5.52a4.5 4.5 0 0 1-4.51 4.68zm-9.35-4a4.49 4.49 0 0 1-.54-3.07l.15.1 4.8 2.77a.8.8 0 0 0 .8 0l5.88-3.4v2.36a.07.07 0 0 1-.03.06l-4.78 2.76a4.5 4.5 0 0 1-6.28-1.58zm-1.8-9.45a4.48 4.48 0 0 1 2.38-2l-.01.18v5.54a.8.8 0 0 0 .4.7l5.89 3.4-2.04 1.18a.07.07 0 0 1-.07 0l-4.78-2.76a4.5 4.5 0 0 1-1.77-6.24zm14.65 4.07l-5.88-3.4 2.04-1.18a.07.07 0 0 1 .07 0l4.78 2.76a4.5 4.5 0 0 1-.61 8.24v-5.72a.8.8 0 0 0-.4-.7zm2.34-3.23l-.15-.1-4.8-2.77a.8.8 0 0 0-.8 0l-5.88 3.4V6.85a.07.07 0 0 1 .03-.06l4.78-2.76a4.5 4.5 0 0 1 6.82 4.65zm-8.4 4.86l-2.6-1.5 2.6-1.5 2.6 1.5-2.6 1.5z" />
      </svg>
      <span className="font-sans font-bold tracking-tight text-sm">OpenAI</span>
    </div>
  );
}

export function LogoSupreme({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center text-white/80 hover:text-white transition-colors ${className}`}>
      <span className="font-sans font-black italic text-base tracking-tighter" style={{ transform: "skewX(-10deg)" }}>
        Supreme
      </span>
    </div>
  );
}

export function LogoWeatherCompany({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-white/80 hover:text-white transition-colors ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
      <div className="flex flex-col text-[10px] leading-tight font-sans font-semibold">
        <span className="opacity-90">The</span>
        <span className="-mt-0.5">Weather</span>
        <span className="-mt-0.5 opacity-80">Company</span>
      </div>
    </div>
  );
}

export function LogoPolymarket({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-white/80 hover:text-white transition-colors ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" strokeLinejoin="round" />
      </svg>
      <span className="font-sans font-semibold tracking-tight text-sm">Polymarket</span>
    </div>
  );
}

export function LogoNotion({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-white/90 hover:text-white transition-colors ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.69c-.467-.373-.98-.606-2.007-.513L2.733 2.155c-.466.047-.56.28-.373.466l2.1 1.587zm.793 4.292v12.457c0 .7.374.933 1.167.887l14.288-.84c.793-.047.887-.607.887-1.12V4.954c0-.606-.233-.886-.84-.84l-14.615.84c-.653.047-.887.327-.887.952v2.594zm11.336-.046c.093.42.093.84-.28.887l-.98.14v7.744c.466.233 1.073.373 1.54.373.84 0 1.493-.42 1.493-1.493V8.874l-1.773-.42zm-5.74.373c.467.047.607.28.607.747v6.67c-.607-.234-1.306-.374-1.96-.374-.84 0-1.26.234-1.493.56v-6.95c0-.467.14-.654.606-.7l2.24-.047v.094z" />
      </svg>
      <span className="font-sans font-semibold tracking-tight text-sm">Notion</span>
    </div>
  );
}
