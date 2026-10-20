"use client";

import { m, useReducedMotion, useScroll } from "motion/react";

/** Thin teal progress line. Scroll-linked via Motion (no React state updates per frame). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
