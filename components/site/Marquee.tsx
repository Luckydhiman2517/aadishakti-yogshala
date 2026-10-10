import { MANTRAS } from "@/lib/data";

/** Infinite ticker of practice names, split across two opposing rows. */
export default function Marquee() {
  const row = [...MANTRAS, ...MANTRAS];

  return (
    <div className="border-cream/10 bg-night-2 relative overflow-hidden border-y py-5">
      <div
        aria-hidden
        className="from-night pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent"
      />
      <div
        aria-hidden
        className="from-night pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent"
      />
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {row.map((m, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-cream/45 text-2xl whitespace-nowrap sm:text-3xl">
              {m}
            </span>
            <span className="bg-saffron/50 size-1.5 shrink-0 rotate-45" />
          </span>
        ))}
      </div>
    </div>
  );
}
