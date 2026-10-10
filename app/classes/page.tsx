import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ClassesGrid from "@/components/site/ClassesGrid";
import Reveal from "@/components/site/Reveal";
import Faq from "@/components/site/Faq";
import CtaBanner from "@/components/site/CtaBanner";
import { IMG } from "@/lib/images";
import { PROGRAMMES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Classes & programmes",
  description:
    "Ten yoga practices taught at Aadishakti Yogshaala — Hatha, Ashtanga, Vinyasa, Power, Yin, pranayama, meditation, prenatal, kids and yoga therapy — plus teacher training and retreats.",
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        kicker="Classes"
        deva="अभ्यास सूची"
        title="Ten practices, from first breath to"
        accent="advanced sadhana"
        body="Every class is capped, props are provided, and modifications are offered aloud rather than on request."
        image={IMG.studioWarriors}
      />

      <Section>
        <SectionHeading
          kicker="Regular classes"
          title="Find the practice that"
          accent="suits you"
          body="Not sure where to begin? Hatha in either batch is the usual starting point — or tell us about yourself and we will place you."
        />
        <div className="mt-14">
          <ClassesGrid detailed />
        </div>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y" glow="violet">
        <SectionHeading
          kicker="Deeper study"
          deva="प्रशिक्षण"
          title="Trainings, retreats and"
          accent="group programmes"
        />

        <div className="mt-14 space-y-6">
          {PROGRAMMES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group border-cream/10 bg-night/60 hover:border-marigold/30 grid overflow-hidden rounded-3xl border transition-colors duration-500 lg:grid-cols-[22rem_1fr]">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 22rem, 100vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="from-night/80 absolute inset-0 bg-gradient-to-r to-transparent lg:to-night/10" />
                </div>

                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-deva text-marigold/75">{p.deva}</p>
                      <h3 className="font-display mt-1 text-3xl">{p.title}</h3>
                      <p className="text-cream/50 mt-1.5 text-sm">{p.length}</p>
                    </div>
                    <p className="font-display text-aura text-3xl whitespace-nowrap">
                      {p.price}
                    </p>
                  </div>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-cream/65 flex gap-2.5 text-sm">
                        <Check className="text-sage mt-0.5 size-4 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="group/link text-marigold mt-7 inline-flex items-center gap-2 text-sm tracking-wider uppercase"
                  >
                    Request the prospectus
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section glow="saffron">
        <SectionHeading kicker="Questions" deva="प्रश्न" title="Before you" accent="begin" />
        <div className="mt-14">
          <Faq />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
