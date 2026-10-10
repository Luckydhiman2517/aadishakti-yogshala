"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TEACHERS } from "@/lib/data";
import { RevealGroup, itemVariants } from "./Reveal";

export default function Teachers({ limit }: { limit?: number }) {
  const list = limit ? TEACHERS.slice(0, limit) : TEACHERS;

  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((t) => (
        <motion.article
          key={t.name}
          variants={itemVariants}
          className="group border-cream/10 bg-night-2/60 hover:border-lotus/30 relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1.5"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={t.image}
              alt={`${t.name}, ${t.role}`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
            />
            <div className="from-night via-night/40 absolute inset-0 bg-gradient-to-t to-transparent" />

            <span className="glass absolute top-4 right-4 rounded-full px-3 py-1.5 text-[0.65rem] tracking-wider">
              {t.years} yrs
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-2xl leading-tight">{t.name}</h3>
              <p className="text-marigold mt-1 text-sm">{t.role}</p>
              <p className="text-cream/45 mt-1 text-xs">{t.credential}</p>
            </div>
          </div>

          <div className="p-6">
            <p className="text-cream/60 text-sm leading-relaxed">{t.bio}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {t.teaches.map((s) => (
                <li
                  key={s}
                  className="border-cream/15 text-cream/60 group-hover:border-lotus/30 rounded-full border px-3 py-1 text-[0.7rem] transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </RevealGroup>
  );
}
