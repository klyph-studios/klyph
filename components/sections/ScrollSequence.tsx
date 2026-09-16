"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";

interface ScrollSequenceProps {
  frameCount?: number;
  folderPath?: string;
  filePrefix?: string;
  fileExtension?: string;
  padZeroes?: number;
}

export function ScrollSequence({
  frameCount = 30,
  folderPath = "/sequence",
  filePrefix = "frame_",
  fileExtension = "png",
  padZeroes = 2,
}: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isLoadedRef = useRef<boolean>(false);

  // Helper to format frame path
  const getFramePath = (index: number) => {
    const num = padZeroes > 0 
      ? String(index + 1).padStart(padZeroes, "0") 
      : String(index + 1);
    return `${folderPath}/${filePrefix}${num}.${fileExtension}`;
  };

  // Preload all 30 frames
  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === frameCount) {
          isLoadedRef.current = true;
          // Initial draw of frame 0
          renderFrame(0);
        }
      };
      img.onerror = () => {
        // Even if an individual image fails, keep tracking
        loaded++;
        setLoadedCount(loaded);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    // Window resize handler to maintain crisp canvas resolution
    const handleResize = () => {
      renderFrame(currentFrameIndex - 1);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [frameCount, folderPath, filePrefix, fileExtension, padZeroes]);

  // Canvas drawing function
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Retina / High-DPI screen support
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual canvas buffer size matching device pixels
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Aspect ratio containment (fit within canvas)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawW = rect.width;
    let drawH = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawH = rect.height;
      drawW = drawH * imgRatio;
      offsetX = (rect.width - drawW) / 2;
    } else {
      // Canvas is taller than image
      drawW = rect.width;
      drawH = drawW / imgRatio;
      offsetY = (rect.height - drawH) / 2;
    }

    // High quality smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    ctx.restore();
  };

  // GSAP ScrollTrigger setup
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const frameTrack = { frame: 0 };

      // Pin the sequence container and scrub through the 30 frames
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=2200", // Scroll length to scrub through the 30 images
        pin: true,
        scrub: 0.5, // Buttery smooth momentum catch-up
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          // Calculate current frame index (0 to frameCount - 1)
          const targetFrame = Math.min(
            frameCount - 1,
            Math.floor(progress * frameCount)
          );

          frameTrack.frame = targetFrame;
          setCurrentFrameIndex(targetFrame + 1);
          renderFrame(targetFrame);
        },
      });

      return () => {
        st.kill();
      };
    },
    [frameCount, loadedCount],
    containerRef
  );

  const progressPercent = Math.round(scrollProgress * 100);

  return (
    <section
      ref={containerRef}
      id="brand-sequence"
      className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Top Header Information HUD */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-8 pt-24 sm:pt-28 flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-3 font-heading text-xs font-bold tracking-[0.25em] uppercase text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>KLYPH Kinetic Sequence</span>
            <span className="text-zinc-500">//</span>
            <span className="text-zinc-200">Scroll-Controlled Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight mt-1.5 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Precision Brand Fluidity
          </h2>
        </div>

        {/* Frame & Progress Counter Badge */}
        <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full">
          <div className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
            Frame <span className="text-white font-bold">{String(currentFrameIndex).padStart(2, "0")}</span> / {frameCount}
          </div>
          <span className="w-1 h-3 bg-white/30" />
          <div className="text-xs font-mono font-semibold text-white">
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* Center Canvas Stage */}
      <div className="relative flex-1 w-full flex items-center justify-center p-4">
        {/* Decorative Framing Accents */}
        <div className="absolute w-[80vw] max-w-[700px] aspect-square rounded-full border border-white/10 pointer-events-none animate-spin-slow opacity-60" />
        <div className="absolute w-[60vw] max-w-[520px] aspect-square rounded-full border border-dashed border-white/15 pointer-events-none animate-spin-reverse opacity-40" />

        {/* Loading Indicator while frames are loading */}
        {loadedCount < frameCount && (
          <div className="absolute z-20 flex flex-col items-center gap-3 bg-black/90 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <div className="text-xs font-mono text-zinc-200 tracking-wider">
              Caching Frames: {loadedCount}/{frameCount}
            </div>
          </div>
        )}

        {/* Canvas Element */}
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full max-w-[620px] max-h-[65vh] object-contain cursor-grab active:cursor-grabbing drop-shadow-[0_20px_50px_rgba(255,255,255,0.07)]"
        />

        {/* Dynamic Storytelling Text Annotations appearing at scroll milestones */}
        <div
          className={`absolute left-8 lg:left-16 bottom-24 max-w-xs transition-all duration-700 pointer-events-none bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 ${
            scrollProgress > 0.05 && scrollProgress < 0.45
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase mb-1 font-semibold">
            Phase 01 // Origin
          </div>
          <h3 className="font-heading font-bold text-lg text-white mb-1.5">
            Dynamic Monogram Genesis
          </h3>
          <p className="text-xs font-sans text-zinc-200 leading-relaxed font-normal">
            Scroll down to watch the form expand through calibrated vector geometry.
          </p>
        </div>

        <div
          className={`absolute right-8 lg:right-16 bottom-24 max-w-xs text-right transition-all duration-700 pointer-events-none bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 ${
            scrollProgress >= 0.45 && scrollProgress < 0.85
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase mb-1 font-semibold">
            Phase 02 // Resonance
          </div>
          <h3 className="font-heading font-bold text-lg text-white mb-1.5">
            Acoustic & Light Radiation
          </h3>
          <p className="text-xs font-sans text-zinc-200 leading-relaxed font-normal">
            Synchronized harmonic waves pulsate as the user controls the timeline.
          </p>
        </div>

        <div
          className={`absolute left-1/2 -translate-x-1/2 bottom-20 text-center transition-all duration-700 pointer-events-none bg-black/70 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 ${
            scrollProgress >= 0.85
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase mb-1 font-semibold">
            Phase 03 // Resolution
          </div>
          <h3 className="font-heading font-bold text-xl text-white mb-1">
            Identity Unified
          </h3>
          <p className="text-xs font-sans text-zinc-200">
            Scroll further to continue exploring the studio portfolio.
          </p>
        </div>
      </div>

      {/* Bottom Progress Bar and Prompt */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-8 pb-8">
        <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
          <span>↓ Scroll to scrub animation</span>
          <span>{currentFrameIndex === frameCount ? "Complete" : "Interactive Scrub"}</span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-zinc-400 via-white to-zinc-200 transition-all duration-75 ease-out rounded-full"
            style={{ width: `${Math.max(3, progressPercent)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
