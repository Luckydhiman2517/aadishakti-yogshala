"use client";

import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Slow-rising motes of light — reads as incense smoke or temple embers over
 * the hero. Purely decorative, and disabled under reduced-motion.
 */
export default function Embers({ count = 26 }: { count?: number }) {
  const reduce = useReducedMotion();

  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 97) % 100,
        size: 2 + ((i * 13) % 5),
        delay: (i * 0.73) % 14,
        duration: 11 + ((i * 7) % 9),
        hue: i % 3,
      })),
    [count],
  );

  if (reduce) return null;

  const tint = ["bg-marigold", "bg-lotus", "bg-cream"];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m) => (
        <span
          key={m.id}
          className={`absolute bottom-0 rounded-full blur-[1px] ${tint[m.hue]}`}
          style={{
            left: `${m.left}%`,
            width: m.size,
            height: m.size,
            animation: `rise ${m.duration}s linear ${m.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
