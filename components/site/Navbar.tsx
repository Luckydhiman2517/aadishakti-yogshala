"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-cream/10 bg-night/85 border-b py-2 backdrop-blur-xl"
            : "border-b border-transparent py-4"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <Trishul className={scrolled ? "size-9" : "size-11"} />
            <span className="leading-none">
              <span className="font-display text-cream block text-lg tracking-wide sm:text-xl">
                Aadishakti
              </span>
              <span className="text-saffron/80 block text-[0.62rem] tracking-[0.34em] uppercase">
                Yogshaala
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                      active ? "text-marigold" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="bg-cream/8 ring-marigold/25 absolute inset-0 -z-10 rounded-full ring-1"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SITE.phoneHref}
              className="text-cream/70 hover:text-marigold hidden items-center gap-2 text-sm transition-colors xl:flex"
            >
              <Phone className="size-4" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="from-saffron to-lotus text-night shadow-saffron/20 hover:shadow-saffron/40 hidden rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-medium shadow-lg transition-all hover:-translate-y-0.5 sm:block"
            >
              Book a trial
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="glass text-cream grid size-11 place-items-center rounded-full lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-night/95 fixed inset-0 z-40 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <ul className="space-y-1">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.45 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`font-display block border-b py-3 text-3xl ${
                        pathname === item.href
                          ? "border-marigold/40 text-marigold"
                          : "border-cream/8 text-cream/85"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-10 space-y-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="from-saffron to-lotus text-night block rounded-full bg-gradient-to-r py-3.5 text-center font-medium"
                >
                  Book a free trial class
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="glass text-cream flex items-center justify-center gap-2 rounded-full py-3.5"
                >
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Minimal trishul + om mark used as the shaala's logo. */
function Trishul({ className = "" }: { className?: string }) {
  return (
    <span className={`relative grid shrink-0 place-items-center transition-all ${className}`}>
      <span className="from-saffron/30 to-lotus/20 absolute inset-0 animate-glow rounded-full bg-gradient-to-br blur-md" />
      <svg viewBox="0 0 48 48" fill="none" className="relative size-full">
        <circle cx="24" cy="24" r="22" stroke="url(#g1)" strokeWidth="1.2" opacity="0.5" />
        <path
          d="M24 9v30M24 9l-5 7M24 9l5 7M15 17c0 6 4 9 9 9s9-3 9-9"
          stroke="url(#g1)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="24" cy="38" r="2.4" fill="url(#g1)" />
        <defs>
          <linearGradient id="g1" x1="4" y1="4" x2="44" y2="44">
            <stop stopColor="#ffc247" />
            <stop offset="0.55" stopColor="#ff9b2f" />
            <stop offset="1" stopColor="#ff6fa5" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
