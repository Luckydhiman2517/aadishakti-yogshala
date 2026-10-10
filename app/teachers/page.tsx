import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import Teachers from "@/components/site/Teachers";
import Testimonials from "@/components/site/Testimonials";
import CtaBanner from "@/components/site/CtaBanner";
import Reveal from "@/components/site/Reveal";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our teachers",
  description:
    "Meet the five certified teachers of Aadishakti Yogshaala — Hatha, Ashtanga and Mysore, meditation and Yoga Nidra, yoga therapy and Ayurveda, Vinyasa and prenatal.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHero
        kicker="Our teachers"
        deva="आचार्य वृन्द"
        title="Five teachers, sixty years"
        accent="on the mat"
        body="Ashram residency, Mysore authorisation, a clinical Ayurveda practice and a prenatal certification — between them, most of what a student is likely to need."
        image={IMG.outdoorCommunity}
      />

      <Section>
        <div className="mt-2">
          <Teachers />
        </div>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y" glow="saffron">
        <SectionHeading
          kicker="How we teach"
          deva="शिक्षण पद्धति"
          title="Adjusted by hand,"
          accent="named by name"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              n: "01",
              t: "We learn your body first",
              b: "New students get a short posture and breath assessment before their second class, and any injury is noted on your card.",
            },
            {
              n: "02",
              t: "Hands-on, with consent",
              b: "Adjustments are offered, not imposed. Turn your card to the grey side on the mat and the teacher will guide verbally instead.",
            },
            {
              n: "03",
              t: "Progress is written down",
              b: "Every month your teacher notes what has changed and what to work on — and gives you a home practice to match.",
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="border-cream/10 bg-night/60 h-full rounded-3xl border p-7">
                <p className="font-display text-aura text-4xl">{s.n}</p>
                <h3 className="font-display mt-4 text-xl leading-snug">{s.t}</h3>
                <p className="text-cream/60 mt-3 text-sm leading-relaxed">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section glow="lotus">
        <SectionHeading kicker="In their words" deva="अनुभव" title="What students" accent="say" />
        <div className="mt-14">
          <Testimonials />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
