import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import Pricing from "@/components/site/Pricing";
import Faq from "@/components/site/Faq";
import Reveal from "@/components/site/Reveal";
import CtaBanner from "@/components/site/CtaBanner";
import { IMG } from "@/lib/images";
import { PROGRAMMES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Membership & pricing",
  description:
    "Trial week ₹499, monthly ₹2,400, quarterly ₹6,300, annual ₹21,000 — unlimited classes in your batch, props and live online access included. No lock-in.",
};

const INCLUDED = [
  "Unlimited classes within your batch, six days a week",
  "Mats, blocks, belts, bolsters and blankets",
  "Live online streaming of the same class",
  "A posture and breath assessment when you join",
  "Monthly written progress notes from your teacher",
  "Sunday community flow and satsang",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Membership"
        deva="शुल्क"
        title="Plain pricing, and"
        accent="no lock-in"
        body="Freeze once a quarter, switch batches whenever your week changes, and leave with a pro-rata refund in the first seven days."
        image={IMG.rolledMats}
      />

      <Section>
        <div className="mt-2">
          <Pricing />
        </div>

        <Reveal delay={0.2}>
          <div className="border-cream/10 bg-night-2/50 mx-auto mt-16 max-w-4xl rounded-3xl border p-8 sm:p-10">
            <h3 className="font-display text-2xl">Every plan includes</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((f) => (
                <li key={f} className="text-cream/65 flex gap-3 text-sm">
                  <span className="bg-marigold mt-1.5 size-1.5 shrink-0 rotate-45" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-cream/40 mt-7 text-sm leading-relaxed">
              Drop-in classes are ₹400 each. Students, senior citizens and families of
              three or more receive 15% off any plan — please ask at the desk.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y" glow="violet">
        <SectionHeading
          kicker="Trainings & retreats"
          deva="प्रशिक्षण शुल्क"
          title="Longer courses,"
          accent="separately priced"
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {PROGRAMMES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="border-cream/10 bg-night/60 hover:border-marigold/30 flex h-full flex-col rounded-2xl border p-7 transition-colors">
                <p className="font-deva text-marigold/70 text-sm">{p.deva}</p>
                <h3 className="font-display mt-1 text-xl">{p.title}</h3>
                <p className="text-cream/45 mt-1.5 text-xs">{p.length}</p>
                <p className="font-display text-aura mt-5 text-3xl">{p.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/classes"
              className="group text-marigold inline-flex items-center gap-2 text-sm tracking-wider uppercase"
            >
              See what each course covers
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section glow="saffron">
        <SectionHeading kicker="Questions" deva="प्रश्न" title="Fees, freezes and" accent="refunds" />
        <div className="mt-14">
          <Faq />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
