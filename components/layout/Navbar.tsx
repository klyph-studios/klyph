"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, pageHref: string) => {
    if (pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Work", sectionId: "work", href: "/work" },
    { label: "Services", sectionId: "services", href: "/services" },
    { label: "Pricing", sectionId: "pricing", href: "/pricing" },
    { label: "Testimonials", sectionId: "testimonials", href: "/#testimonials" },
    { label: "Contact", sectionId: "cta", href: "/contact" },
  ];

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
          
          {/* Left: Vercel-Style Klyph Triangle Logo + Name */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              aria-label="Klyph Home"
              className="flex items-center gap-2.5 group cursor-pointer"
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
              <span className="font-sans font-bold text-lg tracking-tight text-white flex items-center">
                klyph
                <span className="w-1.5 h-1.5 rounded-full bg-white ml-1 mb-0.5 animate-pulse" />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={pathname === "/" ? `#${link.sectionId}` : link.href}
                  onClick={() => handleNavClick(link.sectionId, link.href)}
                  className={`text-[13px] py-1 cursor-pointer transition-colors ${
                    pathname === link.href
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center text-[13px] font-medium text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/25 px-3.5 py-1.5 rounded-full transition-all duration-150"
            >
              Get in Touch
            </Link>

            <a
              href="https://cal.com/klyph/strategic-consultation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-[13px] font-semibold text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-full transition-all duration-150 shadow-sm active:scale-95"
            >
              Book Consultation
            </a>

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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={pathname === "/" ? `#${link.sectionId}` : link.href}
                onClick={() => {
                  handleNavClick(link.sectionId, link.href);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-zinc-300 hover:text-white py-2 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-medium py-3 rounded-full bg-white/[0.06] border border-white/15 text-white"
            >
              Get in Touch
            </Link>
            <a
              href="https://cal.com/klyph/strategic-consultation"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center text-sm font-semibold py-3 rounded-full bg-white text-black"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
