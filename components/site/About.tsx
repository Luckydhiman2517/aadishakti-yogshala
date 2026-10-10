import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG } from "@/lib/images";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="bg-violet/10 pointer-events-none absolute top-1/4 -left-40 size-[34rem] rounded-full blur-[140px]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Layered, animated image stack */}
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/6]">
            <Image
              src={IMG.namasteBack}
              alt="A student seated in pranam mudra at the close of practice"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="animate-kenburns object-cover"
            />
            <div className="from-night/70 absolute inset-0 bg-gradient-to-t to-transparent" />
          </div>

          <div className="border-night/60 absolute -right-4 -bottom-10 w-44 overflow-hidden rounded-2xl border-4 shadow-2xl sm:-right-8 sm:w-56">
            <div className="relative aspect-square">
              <Image
                src={IMG.lotusSeated}
                alt="Pranayama practice in padmasana"
                fill
                sizes="14rem"
                className="object-cover"
              />
            </div>
          </div>

          <div className="glass absolute -top-6 -left-4 animate-float-slow rounded-2xl px-5 py-4 sm:-left-8">
            <p className="font-display text-aura text-3xl">18</p>
            <p className="text-cream/55 text-[0.65rem] tracking-[0.2em] uppercase">
              Years teaching
            </p>
          </div>

          <div
            aria-hidden
            className="border-marigold/20 absolute -right-16 -bottom-20 -z-10 size-64 animate-spin-slower rounded-full border border-dashed"
          />
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            kicker="Our shaala"
            deva="आदिशक्ति — आदि शक्ति, the first energy"
            title="Yoga as it was taught,"
            accent="not as it trends"
          />

          <Reveal delay={0.2}>
            <div className="text-cream/65 mt-7 space-y-5 leading-relaxed">
              <p>
                Aadishakti was founded in 2007 by Acharya Meera Joshi after nine years
                of study in the Bihar School tradition. The idea was simple and has not
                changed: teach the whole of yoga, to a small enough group that nobody
                goes uncorrected.
              </p>
              <p>
                That means asana, yes — but also pranayama before dawn, the kriyas, the
                Yoga Sutras read slowly over a year, and the long stillness at the end
                that most studios cut short. Our halls hold eighteen mats. The therapy
                groups hold six.
              </p>
              <p>
                Students arrive for a bad back or a loud mind, and tend to stay for the
                rest of it. Roughly half of each new batch has never practised before.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {[
                { k: "Founded", v: "2007" },
                { k: "Mats per class", v: "6 – 18" },
                { k: "Teachers", v: "5 certified" },
                { k: "Halls", v: "2 + terrace" },
                { k: "Batches", v: "Morning & evening" },
                { k: "Online", v: "Live streamed" },
              ].map((d) => (
                <div key={d.k} className="border-marigold/40 border-l pl-4">
                  <dt className="text-cream/45 text-[0.65rem] tracking-[0.2em] uppercase">
                    {d.k}
                  </dt>
                  <dd className="font-display mt-1 text-lg">{d.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.4}>
            <Link
              href="/about"
              className="group text-marigold mt-10 inline-flex items-center gap-2 text-sm tracking-wider uppercase"
            >
              Read our story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
