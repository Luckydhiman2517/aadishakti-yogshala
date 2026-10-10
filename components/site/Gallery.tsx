"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { RevealGroup, itemVariants } from "./Reveal";

const spanClass: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery({ limit }: { limit?: number }) {
  const items = limit ? GALLERY.slice(0, limit) : GALLERY;
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <RevealGroup
        stagger={0.055}
        className="grid auto-rows-[13rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] sm:grid-cols-3 lg:grid-cols-4"
      >
        {items.map((g, i) => (
          <motion.button
            key={g.src}
            variants={itemVariants}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-2xl ${spanClass[g.span] ?? ""}`}
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-115"
            />
            <span className="from-night/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-95" />
            <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-cream/90 block text-xs leading-snug">{g.alt}</span>
            </span>
            <span className="glass absolute top-3 right-3 grid size-9 place-items-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Expand className="size-4" />
            </span>
          </motion.button>
        ))}
      </RevealGroup>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-night/95 fixed inset-0 z-[70] grid place-items-center p-4 backdrop-blur-xl sm:p-10"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image"
          >
            <motion.div
              key={open}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full w-full max-w-5xl"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                <Image
                  src={items[open].src}
                  alt={items[open].alt}
                  fill
                  sizes="100vw"
                  quality={88}
                  className="object-contain"
                />
              </div>
              <p className="text-cream/65 mt-4 text-center text-sm">{items[open].alt}</p>
            </motion.div>

            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="glass absolute top-5 right-5 grid size-11 place-items-center rounded-full"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="glass absolute left-3 grid size-12 place-items-center rounded-full sm:left-8"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="glass absolute right-3 grid size-12 place-items-center rounded-full sm:right-8"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
