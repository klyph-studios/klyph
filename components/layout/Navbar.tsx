"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
}

export function Navbar({}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (mobOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobOpen]);

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
        className={`fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 transition-all duration-400 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3 sm:py-4" : ""
        }`}
      >
        <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-8">
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            onClick={() => go("home")}
          >
            <img
              src="/logo_icon_white.png"
              alt="klyph logo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-syne font-extrabold text-xl sm:text-2xl text-white tracking-tighter flex items-center">
              klyph
              <span className="w-1.5 h-1.5 rounded-full bg-white ml-1 mb-1 animate-pulse" />
            </span>
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
              className="hidden md:inline-flex btn btn-primary text-xs uppercase font-bold tracking-widest px-6 py-3 rounded bg-white text-black hover:bg-zinc-200 transition-all"
              onClick={() => go("cta")}
            >
              Book Consultation
            </button>
          </div>

          <button
            className="flex md:hidden flex-col gap-1.5 bg-none border-none cursor-pointer p-2 -mr-2"
            onClick={() => setMobOpen(true)}
            aria-label="Open mobile menu"
          >
            <span className="w-6 h-0.5 bg-white rounded-sm" />
            <span className="w-6 h-0.5 bg-white rounded-sm" />
            <span className="w-6 h-0.5 bg-white rounded-sm" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobOpen && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-50 flex flex-col items-center justify-center gap-8 p-6">
          <button
            className="absolute top-6 right-6 text-zinc-400 text-3xl w-10 h-10 flex items-center justify-center hover:text-white"
            onClick={() => setMobOpen(false)}
            aria-label="Close mobile menu"
          >
            ✕
          </button>
          <img src="/logo_white.png" alt="klyph" className="h-12 w-auto object-contain mb-2" />
          <div className="flex flex-col items-center gap-6">
            {links.map(([id, label]) => (
              <a
                key={id}
                onClick={() => go(id)}
                className="font-syne text-2xl sm:text-3xl font-extrabold text-white cursor-pointer hover:text-zinc-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="btn btn-primary text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded bg-white text-black mt-4 shadow-lg"
            onClick={() => go("cta")}
          >
            Book Consultation
          </button>
        </div>
      )}
    </>
  );
}
