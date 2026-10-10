"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { STATS } from "@/lib/data";

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    // Under reduced motion the final value is rendered directly, below.
    if (!inView || reduce) return;

    const duration = 1600;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min((now - started) / duration, 1);
      // easeOutExpo, so the number lands softly
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setShown(value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduce]);

  const display = reduce ? value : shown;

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-cream/10 bg-night-2/60 border-b">
      <div className="container-x grid grid-cols-2 divide-y divide-x divide-cream/10 sm:grid-cols-4 sm:divide-y-0">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-9 text-center sm:py-11">
            <p className="font-display text-aura text-4xl sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </p>
            <p className="text-cream/50 mt-2 text-xs tracking-[0.2em] uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
