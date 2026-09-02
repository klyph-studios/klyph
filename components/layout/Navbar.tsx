"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobOpen(false);
  };

  const links: [string, string][] = [
    ["home", "Home"],
    ["work", "Work"],
    ["services", "Services"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-400 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4" : ""
        }`}
      >
        <div className="flex items-center justify-between max-w-[1240px] mx-auto px-8">
          <div
            className="font-syne font-extrabold text-2xl text-white tracking-tighter flex items-center gap-1 cursor-pointer"
            onClick={() => go("home")}
          >
            KLYPH
            <span className="w-1.5 h-1.5 rounded-full bg-white mb-1 animate-pulse" />
          </div>

          <ul className="hidden md:flex items-center gap-10 list-none">
            {links.map(([id, label]) => (
              <li key={id}>
                <a
                  onClick={() => go(id)}
                  className="text-zinc-400 text-sm font-medium font-syne tracking-wider cursor-pointer hover:text-white transition-colors relative"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              className="theme-toggle-btn text-xs font-bold font-syne px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all flex items-center gap-1.5"
              onClick={onToggleTheme}
              title="Press ESC anywhere to toggle theme color"
            >
              <span>ESC</span>
              <span>{theme === "dark" ? "☀️ Light" : "🌙 Dark"}</span>
            </button>

            <button
              className="hidden md:inline-flex btn btn-primary text-xs uppercase font-bold tracking-widest px-6 py-3 rounded bg-white text-black hover:bg-zinc-200 transition-all"
              onClick={() => go("cta")}
            >
              Book Consultation
            </button>
          </div>

          <button className="flex md:hidden flex-col gap-1.5 bg-none border-none cursor-pointer p-1" onClick={() => setMobOpen(true)}>
            <span className="w-6 h-0.5 bg-white rounded-sm" />
            <span className="w-6 h-0.5 bg-white rounded-sm" />
            <span className="w-6 h-0.5 bg-white rounded-sm" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center gap-10">
          <button className="absolute top-8 right-8 text-zinc-400 text-3xl" onClick={() => setMobOpen(false)}>
            ✕
          </button>
          {links.map(([id, label]) => (
            <a key={id} onClick={() => go(id)} className="font-syne text-4xl font-extrabold text-white cursor-pointer hover:text-zinc-300">
              {label}
            </a>
          ))}
          <button className="btn btn-primary text-sm uppercase font-bold px-8 py-4 rounded bg-white text-black" onClick={() => go("cta")}>
            Book Consultation
          </button>
        </div>
      )}
    </>
  );
}
