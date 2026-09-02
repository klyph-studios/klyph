"use client";

import { KLYPH_DATA } from "@/lib/data";

export function Footer() {
  const f = KLYPH_DATA.footer;

  return (
    <footer className="footer bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="font-syne font-extrabold text-3xl text-white tracking-tighter mb-4 flex items-center gap-1">
              KLYPH
              <span className="w-2 h-2 rounded-full bg-white mb-1" />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">{f.tagline}</p>
            <div className="text-xs text-zinc-500 font-syne font-semibold tracking-wider">
              {f.location}
            </div>
          </div>

          <div>
            <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3 list-none text-sm text-zinc-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">Direct Contact</h4>
            <div className="text-sm text-zinc-300 font-semibold mb-2">{f.email}</div>
            <div className="text-xs text-zinc-400 mb-6">{f.phone}</div>
            <div className="text-[11px] text-zinc-500 uppercase tracking-widest">
              ESC Key → Toggle B&W Color Mode
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center pt-8 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Klyph Digital Studio. All rights reserved.</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
