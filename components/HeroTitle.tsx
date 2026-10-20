"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * The oversized two-line heading. The entrance is pure CSS (runs without waiting for hydration);
 * Motion adds one scroll-linked moment: the two lines drift apart as you scroll past the hero.
 */
export function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  return (
    <h1 ref={ref} className="display text-paper">
      <span className="hero-mask">
        <m.span style={reduce ? undefined : { x: left }} className="block">
          <span className="hero-rise">Frontend</span>
        </m.span>
      </span>
      <span className="hero-mask">
        <m.span style={reduce ? undefined : { x: right }} className="block">
          <span className="hero-rise lg:-mr-[2vw] lg:text-right">Developer</span>
        </m.span>
      </span>
    </h1>
  );
}
