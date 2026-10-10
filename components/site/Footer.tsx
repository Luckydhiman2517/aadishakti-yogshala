import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { NAV, SITE, CLASSES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-cream/10 bg-night relative overflow-hidden border-t">
      <div
        aria-hidden
        className="bg-violet/10 pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full blur-[130px]"
      />

      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-deva text-marigold text-2xl">{SITE.nameDeva}</p>
            <h3 className="font-display mt-1 text-2xl">{SITE.name}</h3>
            <p className="text-cream/60 mt-4 max-w-sm text-sm leading-relaxed">
              {SITE.shortDesc}
            </p>
            <p className="font-deva text-cream/40 mt-6 text-sm">
              ॐ सह नाववतु · सह नौ भुनक्तु · सह वीर्यं करवावहै
            </p>
          </div>

          <div>
            <h4 className="text-saffron text-xs tracking-[0.25em] uppercase">Explore</h4>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/60 hover:text-marigold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-saffron text-xs tracking-[0.25em] uppercase">Practices</h4>
            <ul className="mt-5 space-y-2.5">
              {CLASSES.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/classes#${c.slug}`}
                    className="text-cream/60 hover:text-marigold text-sm transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-saffron text-xs tracking-[0.25em] uppercase">Visit the shaala</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="text-cream/60 flex gap-3">
                <MapPin className="text-lotus mt-0.5 size-4 shrink-0" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="text-cream/60 hover:text-marigold flex gap-3 transition-colors"
                >
                  <Phone className="text-lotus mt-0.5 size-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-cream/60 hover:text-marigold flex gap-3 transition-colors"
                >
                  <Mail className="text-lotus mt-0.5 size-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              {SITE.hours.map((h) => (
                <li key={h.days} className="text-cream/60 flex gap-3">
                  <Clock className="text-lotus mt-0.5 size-4 shrink-0" />
                  <span>
                    {h.days}
                    <br />
                    <span className="text-cream/40">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-cream/10 mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-cream/40 text-xs">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {SITE.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-marigold text-xs tracking-wider uppercase transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
