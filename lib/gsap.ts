/**
 * GSAP & ScrollTrigger Initialization and Configuration Utility
 * Ensures GSAP plugins are registered safely in client-side context (Next.js SSR safety).
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once in browser window context
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Disable GSAP lag smoothing to maintain 1:1 synchronization with Lenis smooth scroll
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger };
