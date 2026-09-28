"use client";

import React, { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/[0.08] py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          
          {/* Left: Vercel Triangle Logo + Navigation Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollTo("home")}
              aria-label="Home"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <svg
                width="22"
                height="19"
                viewBox="0 0 76 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-hover:scale-105"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => scrollTo("agent-showcase")}
                  className="flex items-center gap-1 text-[13px] text-zinc-400 hover:text-white transition-colors py-1 cursor-pointer"
                >
                  Products
                  <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {activeDropdown === "products" && (
                  <div className="absolute top-full left-0 mt-2 w-52 p-2 bg-[#0d0d0d] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => scrollTo("agent-showcase")}
                      className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                    >
                      <div className="font-medium text-white">AI Gateway</div>
                      <div className="text-[11px] text-zinc-500">Universal model orchestration</div>
                    </button>
                    <button
                      onClick={() => scrollTo("agent-showcase")}
                      className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                    >
                      <div className="font-medium text-white">Fluid Compute</div>
                      <div className="text-[11px] text-zinc-500">Serverless microVM sandboxes</div>
                    </button>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => scrollTo("agent-infrastructure")}
                  className="flex items-center gap-1 text-[13px] text-zinc-400 hover:text-white transition-colors py-1 cursor-pointer"
                >
                  Resources
                  <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>

              <button
                onClick={() => scrollTo("agent-infrastructure")}
                className="text-[13px] text-zinc-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Enterprise
              </button>

              <button
                onClick={() => scrollTo("cta")}
                className="text-[13px] text-zinc-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Pricing
              </button>
            </nav>
          </div>

          {/* Right Actions: Get a Demo, Log In, Sign Up */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => scrollTo("cta")}
              className="hidden sm:inline-flex items-center text-[13px] font-medium text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/25 px-3.5 py-1.5 rounded-full transition-all duration-150"
            >
              Get a Demo
            </button>

            <button
              onClick={() => scrollTo("cta")}
              className="hidden md:inline-flex items-center text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 transition-colors"
            >
              Log In
            </button>

            <button
              onClick={() => scrollTo("cta")}
              className="inline-flex items-center text-[13px] font-semibold text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-full transition-all duration-150 shadow-sm active:scale-95"
            >
              Sign Up
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white cursor-pointer ml-1"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="flex flex-col space-y-5 text-lg font-medium">
            <button
              onClick={() => scrollTo("agent-showcase")}
              className="text-left text-zinc-300 hover:text-white py-2 border-b border-white/10"
            >
              Products
            </button>
            <button
              onClick={() => scrollTo("agent-infrastructure")}
              className="text-left text-zinc-300 hover:text-white py-2 border-b border-white/10"
            >
              Resources
            </button>
            <button
              onClick={() => scrollTo("agent-infrastructure")}
              className="text-left text-zinc-300 hover:text-white py-2 border-b border-white/10"
            >
              Enterprise
            </button>
            <button
              onClick={() => scrollTo("cta")}
              className="text-left text-zinc-300 hover:text-white py-2 border-b border-white/10"
            >
              Pricing
            </button>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => scrollTo("cta")}
              className="w-full text-center text-sm font-medium py-3 rounded-full bg-white/[0.06] border border-white/15 text-white"
            >
              Get a Demo
            </button>
            <button
              onClick={() => scrollTo("cta")}
              className="w-full text-center text-sm font-semibold py-3 rounded-full bg-white text-black"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}
