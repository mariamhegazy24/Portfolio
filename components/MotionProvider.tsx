"use client";

import { domAnimation, LazyMotion } from "motion/react";

/** Loads only Motion's DOM animation features (no drag/layout) to keep client JS small. `strict` forbids full `motion.*` imports. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
