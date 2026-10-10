"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sunrise, Moon, MapPin, Users, Wifi, ArrowRight } from "lucide-react";
import { BATCHES, SUNDAY, type Session } from "@/lib/data";

/** Formats "05:30" as "5:30 AM". */
function pretty(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h < 12 ? "AM" : "PM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}

const levelTint: Record<Session["level"], string> = {
  Beginner: "border-sage/30 text-sage",
  "All levels": "border-marigold/30 text-marigold",
  Intermediate: "border-lotus/30 text-lotus",
  Advanced: "border-violet/40 text-violet",
};

export default function ScheduleTabs({ showSunday = true }: { showSunday?: boolean }) {
  const [active, setActive] = useState<"morning" | "evening">(
    new Date().getHours() < 14 ? "morning" : "evening",
  );
  const batch = BATCHES.find((b) => b.id === active)!;

  return (
    <div>
      {/* Batch switch */}
      <div className="flex justify-center">
        {/* Full width on narrow phones so the two pills never run off-screen. */}
        <div className="glass flex w-full max-w-md rounded-full p-1.5 sm:inline-flex sm:w-auto sm:max-w-none">
          {BATCHES.map((b) => {
            const on = b.id === active;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setActive(b.id)}
                aria-pressed={on}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-3 text-sm whitespace-nowrap transition-colors sm:flex-none sm:gap-2.5 sm:px-8 ${
                  on ? "text-night" : "text-cream/65 hover:text-cream"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="batch-pill"
                    className="from-saffron to-lotus absolute inset-0 -z-10 rounded-full bg-gradient-to-r"
                    transition={{ type: "spring", stiffness: 340, damping: 32 }}
                  />
                )}
                {b.id === "morning" ? (
                  <Sunrise className="size-4 shrink-0" />
                ) : (
                  <Moon className="size-4 shrink-0" />
                )}
                <span className="font-medium">{b.name}</span>
                <span className="hidden text-xs opacity-75 sm:inline">{b.window}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={batch.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <div className="border-cream/10 bg-night-2/50 relative overflow-hidden rounded-3xl border">
            <div className="absolute inset-0 -z-10 opacity-20">
              <Image
                src={batch.image}
                alt=""
                fill
                sizes="100vw"
                className="animate-kenburns object-cover"
              />
              <div className="from-night via-night/85 to-night absolute inset-0 bg-gradient-to-b" />
            </div>

            <div className="border-cream/10 flex flex-wrap items-center justify-between gap-4 border-b px-6 py-6 sm:px-9">
              <div>
                <p className="font-deva text-marigold text-lg">{batch.deva}</p>
                <h3 className="font-display mt-0.5 text-2xl sm:text-3xl">
                  {batch.name} · {batch.window}
                </h3>
              </div>
              <p className="text-cream/55 max-w-md text-sm leading-relaxed">{batch.note}</p>
            </div>

            <ul className="divide-cream/8 divide-y">
              {batch.sessions.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                  className="group hover:bg-cream/4 grid gap-4 px-6 py-5 transition-colors sm:px-9 lg:grid-cols-[13rem_1fr_auto] lg:items-center"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-marigold text-2xl whitespace-nowrap">
                      {pretty(s.start)}
                    </span>
                    <span className="text-cream/35 text-sm">— {pretty(s.end)}</span>
                  </div>

                  <div>
                    <h4 className="font-display text-xl">{s.label}</h4>
                    <div className="text-cream/50 mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                      <span>{s.teacher}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3" /> {s.hall}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="size-3" /> {s.seats} mats
                      </span>
                      {s.mode !== "Studio" && (
                        <span className="text-sage flex items-center gap-1">
                          <Wifi className="size-3" /> Live online
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:justify-end">
                    <span className="text-cream/60 text-xs whitespace-nowrap">{s.days}</span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[0.68rem] whitespace-nowrap ${levelTint[s.level]}`}
                    >
                      {s.level}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {showSunday && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {SUNDAY.map((s) => (
            <div
              key={s.id}
              className="border-violet/25 from-plum/50 to-night-2/50 rounded-2xl border bg-gradient-to-br p-6"
            >
              <p className="text-violet text-[0.68rem] tracking-[0.22em] uppercase">
                {s.days}
              </p>
              <h4 className="font-display mt-2 text-xl">{s.label}</h4>
              <p className="text-cream/55 mt-1.5 text-sm">
                {pretty(s.start)} — {pretty(s.end)} · {s.hall} · {s.teacher}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact"
          className="group from-saffron to-lotus text-night inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-7 py-3.5 font-medium transition-transform hover:-translate-y-0.5"
        >
          Reserve your mat
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <p className="text-cream/45 text-sm">
          Batches are capped — booking a day ahead is advisable.
        </p>
      </div>
    </div>
  );
}
