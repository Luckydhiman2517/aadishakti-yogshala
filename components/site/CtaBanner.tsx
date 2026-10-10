import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMG.sunriseMeditation}
          alt=""
          fill
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="from-night via-night/80 to-night/60 absolute inset-0 bg-gradient-to-r" />
        <div className="from-night absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <div className="container-x relative py-24 text-center lg:py-32">
        <Reveal>
          <p className="font-deva text-marigold text-xl">शुभारम्भ</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            The first class is free. The hardest part is{" "}
            <em className="text-aura not-italic">unrolling the mat</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-cream/65 mx-auto mt-6 max-w-xl leading-relaxed">
            Come to a morning or evening batch, borrow a mat, sit at the back if you
            like. No form to fill at the door, no flexibility required.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group from-saffron to-lotus text-night shadow-saffron/25 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-8 py-4 font-medium shadow-xl transition-transform hover:-translate-y-0.5"
            >
              Book your free trial
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="glass text-cream hover:border-marigold/40 inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-colors"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
