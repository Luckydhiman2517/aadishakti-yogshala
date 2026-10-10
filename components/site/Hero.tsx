"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useCallback, useRef, useSyncExternalStore } from "react";
import { ArrowRight, Sunrise, Moon, Star } from "lucide-react";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";
import Embers from "@/components/ui/Embers";

/** Tracks a media query without tripping the set-state-in-effect rule. */
function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // The mural is 16:9. A phone screen is roughly 9:19.5, so a full-bleed
  // backdrop would crop away most of the painting — on small screens it
  // becomes a banner at its own aspect ratio instead, with the type beneath.
  const isWide = useMediaQuery("(min-width: 640px)");
  const parallax = isWide && !reduce;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
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
      className="grain relative overflow-hidden pt-20 sm:flex sm:min-h-[100svh] sm:items-center sm:pt-0"
    >
      {/* The Shiva–Shakti mural: a banner on phones, a full-bleed backdrop above. */}
      <motion.div
        style={parallax ? { y: imageY, scale: imageScale } : undefined}
        className="relative aspect-video w-full sm:absolute sm:inset-0 sm:-z-20 sm:aspect-auto sm:h-full"
      >
        <Image
          src={IMG.heroMural}
          alt="Ardhanarishvara — the union of Shiva and Shakti — painted across a cosmic sky, with a practitioner seated in meditation beneath"
          fill
          sizes="100vw"
          quality={90}
          preload
          className="object-cover object-center sm:scale-105"
        />
        {/* Feathers the banner into the page background on phones. */}
        <span
          aria-hidden
          className="from-night absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent sm:hidden"
        />
      </motion.div>

      {/* Scrims: from sm up the type sits over the artwork and needs cover. */}
      <div
        aria-hidden
        className="from-night via-night/55 absolute inset-0 -z-10 hidden bg-gradient-to-r to-transparent sm:block"
      />
      <div
        aria-hidden
        className="from-night via-night/25 absolute inset-0 -z-10 hidden bg-gradient-to-t to-transparent sm:block"
      />

      <Embers />

      <motion.div
        style={parallax ? { y: contentY, opacity: contentOpacity } : undefined}
        className="container-x relative z-10 pt-10 pb-20 sm:pt-32 sm:pb-24"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="glass text-cream/80 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[0.68rem] tracking-[0.2em] uppercase sm:text-xs"
          >
            <span className="bg-sage size-1.5 shrink-0 animate-breathe rounded-full" />
            Morning &amp; evening batches · Rishikesh
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-deva text-marigold mt-6 text-xl sm:mt-7 sm:text-2xl"
          >
            {SITE.nameDeva}
          </motion.p>

          <h1 className="font-display mt-3 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
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
            className="text-cream/70 mt-6 max-w-lg leading-relaxed sm:mt-7 sm:text-lg"
          >
            A traditional shaala teaching Hatha, Ashtanga and the inner sciences — in
            small classes, by teachers who know your name, before sunrise and after work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              className="group from-saffron to-lotus text-night shadow-saffron/25 hover:shadow-lotus/40 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r px-7 py-4 font-medium shadow-xl transition-all hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book a free trial class</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/schedule"
              className="glass text-cream hover:border-marigold/40 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-medium transition-colors"
            >
              See the timetable
            </Link>
          </motion.div>

          {/* Batch windows at a glance */}
          <motion.dl
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:mt-12 sm:flex sm:flex-wrap sm:gap-x-10"
          >
            <div className="flex items-center gap-3">
              <Sunrise className="text-marigold size-5 shrink-0" />
              <div>
                <dt className="text-cream/45 text-[0.62rem] tracking-[0.2em] uppercase sm:text-[0.68rem]">
                  Morning batch
                </dt>
                <dd className="font-display text-lg sm:text-xl">5:00 — 11:00 AM</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Moon className="text-lotus size-5 shrink-0" />
              <div>
                <dt className="text-cream/45 text-[0.62rem] tracking-[0.2em] uppercase sm:text-[0.68rem]">
                  Evening batch
                </dt>
                <dd className="font-display text-lg sm:text-xl">4:30 — 9:15 PM</dd>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-3">
              <Star className="text-sage size-5 shrink-0 fill-current" />
              <div>
                <dt className="text-cream/45 text-[0.62rem] tracking-[0.2em] uppercase sm:text-[0.68rem]">
                  Rated
                </dt>
                <dd className="font-display text-lg sm:text-xl">4.9 / 5 · 320 reviews</dd>
              </div>
            </div>
          </motion.dl>
        </div>
      </motion.div>

      {/* Scroll cue — only where the hero fills the screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        style={parallax ? { opacity: contentOpacity } : undefined}
        className="absolute inset-x-0 bottom-7 z-10 hidden justify-center sm:flex"
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
