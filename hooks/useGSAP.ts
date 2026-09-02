"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Custom hook to safely instantiate GSAP animations using gsap.context().
 * Automatically reverts all created animations and ScrollTriggers on unmount or dependency change.
 * 
 * @param callback Animation setup logic returning void or cleanup function
 * @param dependencies Array of dependencies to re-run GSAP setup
 * @param scope Optional container ref or element scope
 */
export function useGSAP(
  callback: (context: gsap.Context) => void,
  dependencies: any[] = [],
  scope?: React.RefObject<HTMLElement | null>
) {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useIsomorphicLayoutEffect(() => {
    const scopeElement = scope?.current || undefined;
    const ctx = gsap.context((self) => {
      savedCallback.current(self);
    }, scopeElement);

    return () => {
      ctx.revert(); // Reverts all GSAP animations and cleans up ScrollTrigger instances automatically
    };
  }, dependencies);
}
