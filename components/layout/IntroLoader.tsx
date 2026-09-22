"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 1200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center transition-opacity duration-700">
      <div className="mb-6 flex flex-col items-center">
        <img
          src="/logo_white.png"
          alt="klyph"
          className="w-28 h-auto object-contain mb-3 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] animate-pulse"
        />
      </div>
      <div className="text-xs font-syne font-bold text-zinc-400 tracking-[0.3em] uppercase mb-8">
        ULTRA-PREMIUM DIGITAL STUDIO
      </div>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-white transition-all duration-75" style={{ width: `${percent}%` }} />
      </div>
      <div className="font-syne text-xs text-zinc-400 font-bold">{percent}%</div>
    </div>
  );
}
