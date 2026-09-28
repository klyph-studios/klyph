"use client";

import React from "react";
import { KLYPH_DATA } from "@/lib/data";

export function Footer() {
  const f = KLYPH_DATA.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-14 border-b border-white/[0.08]">
          
          {/* Logo & Operational Status */}
          <div className="col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 group cursor-pointer mb-5"
              aria-label="Back to top"
            >
              <svg width="22" height="19" viewBox="0 0 76 65" fill="none">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white" />
              </svg>
              <span className="font-sans font-bold text-lg tracking-tight text-white flex items-center">
                klyph
                <span className="w-1.5 h-1.5 rounded-full bg-white ml-1 mb-0.5" />
              </span>
            </button>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-5">
              {f.tagline}
            </p>

            {/* Operational status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px]">Accepting Select Q3/Q4 Clients</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li><a href="#home" className="hover:text-zinc-300 transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-zinc-300 transition-colors">Selected Work</a></li>
              <li><a href="#services" className="hover:text-zinc-300 transition-colors">Capabilities</a></li>
              <li><a href="#testimonials" className="hover:text-zinc-300 transition-colors">Testimonials</a></li>
              <li><a href="#why-us" className="hover:text-zinc-300 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Disciplines</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li><a href="#services" className="hover:text-zinc-300 transition-colors">Next.js Web Architecture</a></li>
              <li><a href="#services" className="hover:text-zinc-300 transition-colors">Executive Personal Branding</a></li>
              <li><a href="#services" className="hover:text-zinc-300 transition-colors">Motion Design & Cinema Assets</a></li>
              <li><a href="#services" className="hover:text-zinc-300 transition-colors">Autonomous AI Systems</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Direct Contact</h4>
            <div className="space-y-2 text-xs">
              <div>
                <a href={`mailto:${f.email}`} className="text-zinc-300 hover:text-white transition-colors underline-offset-4 hover:underline">
                  {f.email}
                </a>
              </div>
              <div>
                <a href={`tel:${f.phone.replace(/[^+\d]/g, '')}`} className="text-zinc-400 hover:text-white transition-colors">
                  {f.phone}
                </a>
              </div>
              <div className="text-zinc-500 text-[11px] pt-1">
                {f.location}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-zinc-600 gap-4">
          <div>© {new Date().getFullYear()} Klyph Digital Studio. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="https://cal.com/klyph/strategic-consultation" target="_blank" rel="noreferrer" className="hover:text-zinc-400">Schedule Meeting</a>
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
