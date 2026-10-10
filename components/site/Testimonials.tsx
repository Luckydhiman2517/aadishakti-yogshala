"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const reduce = useReducedMotion();
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (step: number) => setState(([i]) => [(i + step + count) % count, step]),
    [count],
  );

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go, reduce, index]);

  const t = TESTIMONIALS[index];

  return (
    <div className="relative mx-auto max-w-4xl">
      <Quote className="text-marigold/15 mx-auto size-16" />

      <div className="relative mt-4 min-h-[21rem] sm:min-h-[17rem]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: dir * -50, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 text-center"
          >
            <div className="text-marigold flex justify-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>

            <blockquote className="font-display mt-6 text-2xl leading-snug text-balance sm:text-3xl lg:text-[2.1rem]">
              “{t.quote}”
            </blockquote>

            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <span className="ring-marigold/30 relative size-14 overflow-hidden rounded-full ring-2">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span className="text-left">
                <span className="block text-base">{t.name}</span>
                <span className="text-cream/45 block text-xs tracking-wider uppercase">
                  {t.detail}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="glass hover:border-marigold/40 grid size-11 place-items-center rounded-full transition-colors"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setState([i, i > index ? 1 : -1])}
              aria-label={`Testimonial ${i + 1}`}
              aria-current={i === index}
              className="group grid h-10 place-items-center px-1"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "bg-marigold w-8"
                    : "bg-cream/20 group-hover:bg-cream/40 w-1.5"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="glass hover:border-marigold/40 grid size-11 place-items-center rounded-full transition-colors"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
