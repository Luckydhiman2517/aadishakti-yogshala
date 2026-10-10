import type { Metadata } from "next";
import { Sunrise, Moon, Info } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ScheduleTabs from "@/components/site/ScheduleTabs";
import Reveal from "@/components/site/Reveal";
import CtaBanner from "@/components/site/CtaBanner";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Class schedule",
  description:
    "Morning batch 5:00 – 11:00 AM and evening batch 4:30 – 9:15 PM, six days a week, with Sunday satsang. Full weekly yoga timetable at Aadishakti Yogshaala.",
};

const NOTES = [
  "Arrive ten minutes early — the hall doors close at the start time so that the opening chant is not interrupted.",
  "Practise on an empty stomach: three hours after a full meal, one hour after something light.",
  "Mats, blocks, belts, bolsters and blankets are provided and sanitised between classes.",
  "Members may switch between the morning and evening batch at any time — just tell the desk a day ahead.",
  "Classes marked “Live online” stream to the same session; recordings stay up for 48 hours.",
  "Public holidays follow the Sunday timetable. Closures are announced on WhatsApp a week ahead.",
];

export default function SchedulePage() {
  return (
    <>
      <PageHero
        kicker="Timetable"
        deva="समय सारिणी"
        title="Two batches, six days,"
        accent="thirteen classes"
        body="Begin at 5:00 AM in the Brahmamuhurta, or at 4:30 PM once the working day is done. Both batches run Monday to Saturday."
        image={IMG.sunriseHills}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="border-marigold/25 from-saffron/10 to-night-2 h-full rounded-3xl border bg-gradient-to-br p-8">
              <Sunrise className="text-marigold size-8" />
              <p className="font-deva text-marigold/75 mt-5">प्रातः सत्र</p>
              <h2 className="font-display mt-1 text-3xl">Morning batch</h2>
              <p className="font-display text-aura mt-2 text-2xl">5:00 — 11:00 AM</p>
              <p className="text-cream/60 mt-4 leading-relaxed">
                Opens with pranayama and kriya in the yogic hour before sunrise, then
                Hatha, Ashtanga and flow. Ends with the gentle and therapy groups
                mid-morning.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-lotus/25 from-violet/12 to-night-2 h-full rounded-3xl border bg-gradient-to-br p-8">
              <Moon className="text-lotus size-8" />
              <p className="font-deva text-lotus/75 mt-5">सायं सत्र</p>
              <h2 className="font-display mt-1 text-3xl">Evening batch</h2>
              <p className="font-display text-aura mt-2 text-2xl">4:30 — 9:15 PM</p>
              <p className="text-cream/60 mt-4 leading-relaxed">
                Starts with the children&rsquo;s class, moves through power, Hatha and
                flow as the evening settles, and closes at 8:30 PM with Yoga Nidra.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y" glow="violet">
        <SectionHeading
          kicker="This week"
          title="The full"
          accent="weekly timetable"
          body="Tap a batch to switch. Halls run in parallel, so two classes at the same hour are in different rooms."
        />
        <div className="mt-14">
          <ScheduleTabs />
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Good to know"
          deva="सूचना"
          title="A few things worth"
          accent="knowing"
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {NOTES.map((n, i) => (
            <Reveal key={n} delay={i * 0.05} as="li">
              <div className="border-cream/10 bg-night-2/50 flex h-full gap-4 rounded-2xl border p-6">
                <Info className="text-marigold mt-0.5 size-5 shrink-0" />
                <p className="text-cream/65 text-sm leading-relaxed">{n}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="text-cream/45 mt-10 text-center text-sm">
            Timetable changes are posted on WhatsApp. Call{" "}
            <a href={SITE.phoneHref} className="text-marigold">
              {SITE.phone}
            </a>{" "}
            if you are unsure whether a class is running.
          </p>
        </Reveal>
      </Section>

      <CtaBanner />
    </>
  );
}
