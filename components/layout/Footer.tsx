"use client";

import React from "react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-14 border-b border-white/[0.08]">
          
          {/* Logo & Status */}
          <div className="col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 group cursor-pointer mb-5"
              aria-label="Back to top"
            >
              <svg width="22" height="19" viewBox="0 0 76 65" fill="none">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white" />
              </svg>
            </button>

            {/* Operational status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px]">All systems operational</span>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Products</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li><a href="#agent-showcase" className="hover:text-zinc-300 transition-colors">AI Gateway</a></li>
              <li><a href="#agent-showcase" className="hover:text-zinc-300 transition-colors">Fluid Compute</a></li>
              <li><a href="#agent-showcase" className="hover:text-zinc-300 transition-colors">Durable Orchestration</a></li>
              <li><a href="#agent-showcase" className="hover:text-zinc-300 transition-colors">MicroVM Sandboxes</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li><a href="#agent-infrastructure" className="hover:text-zinc-300 transition-colors">Documentation</a></li>
              <li><a href="#agent-infrastructure" className="hover:text-zinc-300 transition-colors">Architecture Guides</a></li>
              <li><a href="#agent-infrastructure" className="hover:text-zinc-300 transition-colors">Status</a></li>
              <li><a href="#agent-infrastructure" className="hover:text-zinc-300 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li><a href="#cta" className="hover:text-zinc-300 transition-colors">Enterprise</a></li>
              <li><a href="#cta" className="hover:text-zinc-300 transition-colors">Pricing</a></li>
              <li><a href="#cta" className="hover:text-zinc-300 transition-colors">Contact</a></li>
              <li><a href="#cta" className="hover:text-zinc-300 transition-colors">Privacy & Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-zinc-600 gap-4">
          <div>© {new Date().getFullYear()} Agentic Infrastructure. Built for autonomous systems.</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 cursor-pointer">Security Portal</span>
            <span className="hover:text-zinc-400 cursor-pointer">Compliance</span>
            <span className="hover:text-zinc-400 cursor-pointer">SOC2 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
