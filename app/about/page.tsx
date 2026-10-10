import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import Benefits from "@/components/site/Benefits";
import Stats from "@/components/site/Stats";
import CtaBanner from "@/components/site/CtaBanner";
import Marquee from "@/components/site/Marquee";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "About the shaala",
  description:
    "Founded in 2007, Aadishakti Yogshaala teaches the whole of yoga — asana, pranayama, kriya and philosophy — in classes small enough that nobody goes uncorrected.",
};

const TIMELINE = [
  {
    year: "2007",
    title: "A single room, four students",
    body: "Acharya Meera Joshi returns from nine years of study in the Bihar School tradition and begins teaching Hatha and pranayama in a rented room off Tapovan Road.",
  },
  {
    year: "2012",
    title: "The Shiva Hall opens",
    body: "A second hall is built for the Ashtanga and Mysore programme, and Yogi Arun Prakash joins after his fourth trip to Mysore.",
  },
  {
    year: "2016",
    title: "Therapy and Ayurveda",
    body: "Dr. Nikhil Sharma establishes the yoga-therapy groups — six mats at a time, each student assessed and given a written practice sheet.",
  },
  {
    year: "2019",
    title: "Teacher training begins",
    body: "Our 200-hour course is registered with Yoga Alliance. The first cohort of fourteen graduates; eleven are still teaching today.",
  },
  {
    year: "2021",
    title: "Live online batches",
    body: "Classes are streamed so that travelling and unwell students keep their practice. What began as necessity is now permanent.",
  },
  {
    year: "Today",
    title: "Two batches, 2,400 students",
    body: "Morning and evening, six days a week, with the Sunday satsang open to anyone who wishes to come.",
  },
];

const PRINCIPLES = [
  {
    deva: "अहिंसा",
    title: "Ahimsa on the mat",
    body: "No forcing, no competition, no comparing your body to the mat beside you. Injury is a teaching failure, not a student's.",
  },
  {
    deva: "अभ्यास",
    title: "Abhyasa — steady practice",
    body: "Twenty minutes daily outlasts three hours on a Sunday. We build habits you can keep for thirty years.",
  },
  {
    deva: "स्वाध्याय",
    title: "Svadhyaya — self study",
    body: "We read the Yoga Sutras slowly, a verse at a time, and ask what it means at 6 AM on a Tuesday.",
  },
  {
    deva: "सन्तोष",
    title: "Santosha — contentment",
    body: "The posture is not the point. What the posture does to the mind is the point.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        deva="आदिशक्ति योगशाला"
        title="Eighteen years of teaching the"
        accent="whole of yoga"
        body="Not a gym with mats. A shaala in the old sense — a place of study, where the practice includes the breath, the texts and the silence."
        image={IMG.groupNamaste}
      />

      <Marquee />
      <Stats />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={IMG.meditationGarden}
                alt="Morning meditation in the shaala garden"
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="animate-kenburns object-cover"
              />
              <div className="from-night/60 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              kicker="Our intent"
              title="We teach the eight limbs,"
              accent="not just the third"
            />
            <Reveal delay={0.15}>
              <div className="text-cream/65 mt-7 space-y-5 leading-relaxed">
                <p>
                  Asana — posture — is the third of Patanjali&rsquo;s eight limbs. Most
                  modern studios teach it alone, and teach it fast. We think that is a
                  reasonable workout and an incomplete yoga.
                </p>
                <p>
                  So our morning batch opens in the Brahmamuhurta with pranayama and
                  kriya, when the air is still and the mind has not yet started arguing.
                  Our evening batch closes with Yoga Nidra, because people arrive from
                  work carrying things they need to put down.
                </p>
                <p>
                  In between, there is plenty of asana — strong, precise, and adjusted by
                  hand. But it sits inside something larger, which is the point of the
                  whole exercise.
                </p>
                <p className="font-deva text-marigold/80 text-lg">
                  योगश्चित्तवृत्तिनिरोधः — <span className="font-sans text-cream/50 text-sm">
                    Yoga is the stilling of the fluctuations of the mind. (Y.S. 1.2)
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y" glow="violet">
        <SectionHeading
          kicker="How we got here"
          deva="यात्रा"
          title="From one room to"
          accent="two halls"
        />
        <ol className="relative mx-auto mt-16 max-w-3xl">
          <span
            aria-hidden
            className="from-saffron via-lotus to-violet/0 absolute top-2 bottom-2 left-[5.5rem] hidden w-px bg-gradient-to-b sm:block"
          />
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06} as="li" className="relative pb-11 last:pb-0">
              <div className="sm:grid sm:grid-cols-[5.5rem_1fr] sm:gap-10">
                <p className="font-display text-marigold text-xl sm:text-right">{t.year}</p>
                <div className="relative mt-2 sm:mt-0 sm:pl-8">
                  <span
                    aria-hidden
                    className="bg-saffron ring-night absolute top-2 -left-[0.3rem] hidden size-2.5 rounded-full ring-4 sm:block"
                  />
                  <h3 className="font-display text-2xl leading-snug">{t.title}</h3>
                  <p className="text-cream/60 mt-2.5 leading-relaxed">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section glow="saffron">
        <SectionHeading
          kicker="What we hold to"
          deva="सिद्धान्त"
          title="Four principles, taught"
          accent="every class"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-cream/10 bg-night-2/60 hover:border-marigold/30 h-full rounded-3xl border p-8 transition-colors duration-500">
                <p className="font-deva text-aura text-3xl">{p.deva}</p>
                <h3 className="font-display mt-4 text-2xl">{p.title}</h3>
                <p className="text-cream/60 mt-3 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-cream/10 border-t" glow="lotus">
        <SectionHeading
          kicker="Why students stay"
          deva="विशेषता"
          title="Six things we will not"
          accent="compromise on"
        />
        <div className="mt-14">
          <Benefits />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
