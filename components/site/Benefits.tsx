"use client";

import { motion } from "motion/react";
import { BENEFITS } from "@/lib/data";
import { RevealGroup, itemVariants } from "./Reveal";

export default function Benefits() {
  return (
    <RevealGroup className="grid gap-px overflow-hidden rounded-3xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
      {BENEFITS.map((b, i) => (
        <motion.div
          key={b.title}
          variants={itemVariants}
          className="group bg-night relative overflow-hidden p-8 transition-colors duration-500 hover:bg-night-2 lg:p-10"
        >
          <span className="font-display text-cream/10 group-hover:text-marigold/25 absolute top-5 right-6 text-6xl transition-colors duration-500">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="from-saffron/15 to-lotus/10 ring-marigold/20 grid size-12 place-items-center rounded-2xl bg-gradient-to-br ring-1">
            <span className="bg-marigold size-2.5 rotate-45 rounded-[2px] transition-transform duration-500 group-hover:rotate-[225deg]" />
          </div>
          <h3 className="font-display mt-6 text-2xl leading-snug">{b.title}</h3>
          <p className="text-cream/55 mt-3 text-sm leading-relaxed">{b.body}</p>
          <span className="from-saffron to-lotus absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100" />
        </motion.div>
      ))}
    </RevealGroup>
  );
}
