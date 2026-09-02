/**
 * Lenis Smooth Scroll Configuration Utility
 * Initializes Studio Freight Lenis smooth scrolling instance with optimal momentum tuning.
 */

import Lenis from "lenis";

export function createLenisInstance() {
  if (typeof window === "undefined") return null;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky smooth exponential decay
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  });

  return lenis;
}
