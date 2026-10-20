"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

/**
 * One-time image-frame reveal as it enters the viewport. No-op with reduced motion.
 * The observed wrapper is NOT clipped: browsers treat a fully clip-pathed element as invisible,
 * so observing the clipped element itself would never fire.
 */
export function Unmask({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={className}>
      <m.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: inView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </div>
  );
}
