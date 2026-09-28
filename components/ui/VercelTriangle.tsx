"use client";

import React, { useRef, useState, useEffect } from "react";

export function VercelTriangle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowOffset, setGlowOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Subtle 3D tilt calculation (-10 to +10 degrees)
      const rotateX = -(mouseY / (rect.height / 2)) * 8;
      const rotateY = (mouseX / (rect.width / 2)) * 8;

      setRotation({
        x: Math.max(-12, Math.min(12, rotateX)),
        y: Math.max(-12, Math.min(12, rotateY)),
      });

      setGlowOffset({
        x: (mouseX / rect.width) * 20,
        y: (mouseY / rect.height) * 20,
      });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
      setGlowOffset({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[420px] aspect-square mx-auto select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Volumetric ambient back-glow behind the triangle */}
      <div
        className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0.02) 65%, transparent 80%)",
          filter: "blur(50px)",
          transform: `translate(${glowOffset.x}px, ${glowOffset.y - 20}px)`,
        }}
      />

      {/* Upward fog/beam flare */}
      <div
        className="absolute top-1/4 w-[180px] sm:w-[240px] h-[160px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* 3D Tilting Obsidian Triangle */}
      <div
        className="relative z-10 w-[240px] sm:w-[320px] h-[208px] sm:h-[277px] transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(20px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          viewBox="0 0 100 86.6"
          className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
        >
          <defs>
            {/* Subtle surface gradient */}
            <linearGradient id="triangleFace" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#1c1c1c" />
              <stop offset="40%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#020202" />
            </linearGradient>

            {/* Specular edge light gradient */}
            <linearGradient id="edgeGleam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>

            {/* Ambient drop glow filter */}
            <filter id="coronaGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background edge glow */}
          <polygon
            points="50,2 98,84.6 2,84.6"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2.5"
            filter="url(#coronaGlow)"
          />

          {/* Main Triangle Face */}
          <polygon
            points="50,2 98,84.6 2,84.6"
            fill="url(#triangleFace)"
            stroke="url(#edgeGleam)"
            strokeWidth="1.2"
          />

          {/* Top vertex specular point light */}
          <circle cx="50" cy="3" r="1.5" fill="#ffffff" opacity="0.9" />
        </svg>

        {/* Subtle breathing rim pulse */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 animate-pulse"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 40%)",
          }}
        />
      </div>
    </div>
  );
}
