"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      <ul className="divide-cream/10 divide-y">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-5 py-6 text-left"
              >
                <span
                  className={`font-display mt-0.5 text-sm transition-colors ${
                    isOpen ? "text-marigold" : "text-cream/30"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-display flex-1 text-xl transition-colors sm:text-2xl ${
                    isOpen ? "text-marigold" : "group-hover:text-cream text-cream/85"
                  }`}
                >
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full border transition-colors ${
                    isOpen ? "border-marigold/50 text-marigold" : "border-cream/20 text-cream/50"
                  }`}
                >
                  <Plus className="size-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-cream/60 pr-14 pb-7 pl-10 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
