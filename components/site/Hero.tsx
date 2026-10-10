"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sunrise, Moon, Star } from "lucide-react";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";
import Embers from "@/components/ui/Embers";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax: the mural drifts slower than the page, text lifts away faster.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  const word = {
    hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: 0.45 + i * 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* The Shiva–Shakti mural */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -z-20">
        <Image
          src={IMG.heroMural}
          alt="Ardhanarishvara — the union of Shiva and Shakti — painted across a cosmic sky, with a practitioner seated in meditation beneath"
          fill
          sizes="100vw"
          quality={90}
          preload
          className="scale-105 object-cover object-[52%_32%] sm:object-center"
        />
      </motion.div>

      {/* Scrims: dark on the left so the type reads, vignette all round */}
      <div
        aria-hidden
        className="from-night via-night/85 to-night/10 absolute inset-0 -z-10 bg-gradient-to-r sm:via-night/55 sm:to-transparent"
      />
      {/* On phones the type sits over the artwork itself, so it needs more cover. */}
      <div aria-hidden className="bg-night/45 absolute inset-0 -z-10 sm:hidden" />
      <div
        aria-hidden
        className="from-night via-night/25 absolute inset-0 -z-10 bg-gradient-to-t to-transparent"
      />

      <Embers />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative z-10 pt-28 pb-24 sm:pt-32"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="glass text-cream/80 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs tracking-[0.2em] uppercase"
          >
            <span className="bg-sage size-1.5 animate-breathe rounded-full" />
            Morning &amp; evening batches · Rishikesh
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-deva text-marigold mt-7 text-xl sm:text-2xl"
          >
            {SITE.nameDeva}
          </motion.p>

          <h1 className="font-display mt-3 text-[2.75rem] leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
            {["Awaken the", "primordial", "energy within"].map((line, i) => (
              <motion.span
                key={line}
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className="block"
              >
                {i === 2 ? (
                  <>
                    energy <em className="text-aura not-italic">within</em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="text-cream/70 mt-7 max-w-lg text-base leading-relaxed sm:text-lg"
          >
            A traditional shaala teaching Hatha, Ashtanga and the inner sciences — in
            small classes, by teachers who know your name, before sunrise and after work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group from-saffron to-lotus text-night shadow-saffron/25 hover:shadow-lotus/40 relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r px-7 py-4 font-medium shadow-xl transition-all hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book a free trial class</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/schedule"
              className="glass text-cream hover:border-marigold/40 inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium transition-colors"
            >
              See the timetable
            </Link>
          </motion.div>

          {/* Batch windows at a glance */}
          <motion.dl
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-5"
          >
            <div className="flex items-center gap-3">
              <Sunrise className="text-marigold size-5" />
              <div>
                <dt className="text-cream/45 text-[0.68rem] tracking-[0.2em] uppercase">
                  Morning batch
                </dt>
                <dd className="font-display text-xl">5:00 — 11:00 AM</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Moon className="text-lotus size-5" />
              <div>
                <dt className="text-cream/45 text-[0.68rem] tracking-[0.2em] uppercase">
                  Evening batch
                </dt>
                <dd className="font-display text-xl">4:30 — 9:15 PM</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-sage size-5 fill-current" />
              <div>
                <dt className="text-cream/45 text-[0.68rem] tracking-[0.2em] uppercase">
                  Rated
                </dt>
                <dd className="font-display text-xl">4.9 / 5 · 320 reviews</dd>
              </div>
            </div>
          </motion.dl>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute inset-x-0 bottom-7 z-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-cream/40 text-[0.6rem] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <span className="from-marigold/70 relative h-12 w-px bg-gradient-to-b to-transparent">
            <motion.span
              animate={{ y: [0, 40, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-marigold absolute -left-[2px] top-0 size-[5px] rounded-full"
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
