"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin saffron→lotus bar across the top that tracks page scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="from-saffron via-lotus to-violet fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r"
    />
  );
}
