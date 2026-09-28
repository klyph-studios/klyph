"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { KLYPH_DATA } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$599 — Growth Engine",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open mailto client as direct backup
    window.location.href = `mailto:${KLYPH_DATA.cta.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTier/Budget: ${formData.budget}\n\nProject Scope:\n${formData.message}`
    )}`;
  };

  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black overflow-hidden font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12 sm:pb-16 text-center max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Direct Sales & Engineering Squad</span>
        </div>
        <h1 className="font-sans font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.035em] text-white max-w-4xl mx-auto">
          Let's build your
          <span className="block text-zinc-400 mt-2">next money machine.</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Tell us about your project or schedule a 30-minute private consultation. We respond within 4 hours.
        </p>
      </section>

      {/* Contact Content */}
      <section className="pb-24 sm:pb-32 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Value Props */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl bg-[#080808] border border-white/[0.1] space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    Direct Email
                  </h3>
                  <a
                    href={`mailto:${KLYPH_DATA.cta.email}`}
                    className="font-sans font-semibold text-lg text-white hover:underline"
                  >
                    {KLYPH_DATA.cta.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    Phone & WhatsApp
                  </h3>
                  <a
                    href={`tel:${KLYPH_DATA.footer.phone.replace(/[^+\d]/g, "")}`}
                    className="font-sans font-semibold text-lg text-white hover:underline"
                  >
                    {KLYPH_DATA.footer.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    Global Office
                  </h3>
                  <p className="text-sm text-zinc-300">
                    {KLYPH_DATA.footer.location}
                  </p>
                </div>
              </div>

              {/* Instant Strategy Call Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111111] to-[#080808] border border-white/[0.15] space-y-4">
                <div className="text-2xl">📅</div>
                <h3 className="font-sans font-semibold text-xl text-white">
                  Need an immediate strategy review?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Book a private 30-minute consultation directly with our executive technical director.
                </p>
                <a
                  href="https://cal.com/klyph/strategic-consultation"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full py-3 rounded-full text-center text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-zinc-200 transition-all shadow-lg"
                >
                  Book on Cal.com →
                </a>
              </div>
            </div>

            {/* Right: Project Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#080808] border border-white/[0.12] p-8 sm:p-10 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                      ✓
                    </div>
                    <h3 className="font-sans font-semibold text-2xl text-white">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto">
                      Thank you! Our technical lead will review your scope and get back to you within 4 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Package Tier or Scope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm cursor-pointer"
                      >
                        <option value="$299 — Starter Launchpad">$299 — Starter Launchpad (3–5 Days)</option>
                        <option value="$599 — Growth Engine">$599 — Growth Engine (Most Popular)</option>
                        <option value="$1,299 — Market Dominator">$1,299 — Market Dominator (Enterprise)</option>
                        <option value="Custom Enterprise Build">Custom Enterprise Architecture (Bespoke)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Project Details & Timeline
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand, current site, target market, or specific features needed..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-widest transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.01] active:scale-[0.99]"
                    >
                      Send Project Inquiry →
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
