"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { PLANS } from "@/lib/data";
import { RevealGroup, itemVariants } from "./Reveal";

export default function Pricing() {
  return (
    <RevealGroup className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
      {PLANS.map((p) => (
        <motion.div
          key={p.name}
          variants={itemVariants}
          className={`relative flex flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2 ${
            p.featured
              ? "ring-aura aura-spin from-plum/80 to-night-2 bg-gradient-to-b lg:-mt-5 lg:mb-[-1.25rem]"
              : "border-cream/10 bg-night-2/60 border"
          }`}
        >
          {p.featured && (
            <span className="from-saffron to-lotus text-night absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r px-4 py-1.5 text-[0.65rem] font-medium tracking-[0.18em] uppercase">
              <Sparkles className="size-3" /> Most chosen
            </span>
          )}

          <p className="font-deva text-marigold/70 text-base">{p.deva}</p>
          <h3 className="font-display mt-1 text-2xl">{p.name}</h3>

          <p className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-aura text-4xl">{p.price}</span>
            <span className="text-cream/45 text-xs">{p.unit}</span>
          </p>

          <p className="text-cream/55 mt-4 text-sm leading-relaxed">{p.desc}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="text-cream/70 flex gap-2.5 text-sm">
                <Check className="text-sage mt-0.5 size-4 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={`mt-7 rounded-full py-3.5 text-center text-sm font-medium transition-all ${
              p.featured
                ? "from-saffron to-lotus text-night bg-gradient-to-r hover:-translate-y-0.5"
                : "border-cream/20 text-cream hover:border-marigold/50 hover:text-marigold border"
            }`}
          >
            {p.cta}
          </Link>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
