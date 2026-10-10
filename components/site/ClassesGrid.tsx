"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, Flame } from "lucide-react";
import { CLASSES, type YogaClass } from "@/lib/data";
import { RevealGroup, itemVariants } from "./Reveal";

export default function ClassesGrid({
  limit,
  detailed = false,
}: {
  limit?: number;
  detailed?: boolean;
}) {
  const list = limit ? CLASSES.slice(0, limit) : CLASSES;

  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c) => (
        <motion.article key={c.slug} variants={itemVariants} id={c.slug} className="scroll-mt-28">
          <ClassCard yogaClass={c} detailed={detailed} />
        </motion.article>
      ))}
    </RevealGroup>
  );
}

function ClassCard({
  yogaClass: c,
  detailed,
}: {
  yogaClass: YogaClass;
  detailed: boolean;
}) {
  return (
    <div className="group border-cream/10 bg-night-2/70 hover:border-marigold/30 relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1.5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={c.image}
          alt={c.imageAlt ?? `${c.name} class at Aadishakti Yogshaala`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="from-night via-night/25 absolute inset-0 bg-gradient-to-t to-transparent" />

        <span className="glass text-cream/90 absolute top-4 left-4 rounded-full px-3 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase">
          {c.level}
        </span>

        <p className="font-deva text-marigold absolute bottom-3 left-5 text-lg drop-shadow">
          {c.deva}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl leading-tight">{c.name}</h3>
          <ArrowUpRight className="text-cream/30 group-hover:text-marigold mt-1 size-5 shrink-0 transition-all group-hover:rotate-45" />
        </div>

        <p className="text-cream/60 mt-3 text-sm leading-relaxed">{c.blurb}</p>

        {detailed && (
          <>
            <p className="text-cream/50 mt-4 text-sm leading-relaxed">{c.detail}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.benefits.map((b) => (
                <li
                  key={b}
                  className="border-sage/25 text-sage/90 rounded-full border px-3 py-1 text-[0.7rem]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="border-cream/10 mt-auto flex items-center justify-between gap-4 border-t pt-5 text-xs">
          <span className="text-cream/55 flex items-center gap-1.5">
            <Clock className="size-3.5" /> {c.duration}
          </span>
          <span className="flex items-center gap-1" title={`Intensity ${c.intensity} of 5`}>
            <Flame className="text-saffron size-3.5" />
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`h-1 w-3 rounded-full ${
                  i < c.intensity ? "bg-saffron" : "bg-cream/15"
                }`}
              />
            ))}
          </span>
          <Link
            href="/schedule"
            className="text-marigold/80 hover:text-marigold transition-colors"
          >
            Timings
          </Link>
        </div>
      </div>
    </div>
  );
}
