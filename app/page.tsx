import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Stats from "@/components/site/Stats";
import About from "@/components/site/About";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ClassesGrid from "@/components/site/ClassesGrid";
import ScheduleTabs from "@/components/site/ScheduleTabs";
import Benefits from "@/components/site/Benefits";
import Teachers from "@/components/site/Teachers";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import Pricing from "@/components/site/Pricing";
import Faq from "@/components/site/Faq";
import CtaBanner from "@/components/site/CtaBanner";
import Reveal from "@/components/site/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <About />

      <Section id="classes" glow="saffron" className="border-cream/10 border-t">
        <SectionHeading
          kicker="What we teach"
          deva="अभ्यास"
          title="Ten practices, one"
          accent="unbroken tradition"
          body="From the pre-dawn breath sciences to a strong evening flow — begin where you are, and move through them in your own time."
        />
        <div className="mt-14">
          <ClassesGrid limit={6} />
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              href="/classes"
              className="group border-cream/20 text-cream hover:border-marigold/50 hover:text-marigold inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm transition-colors"
            >
              View all ten practices
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section id="schedule" glow="violet" className="bg-night-2/40 border-cream/10 border-y">
        <SectionHeading
          kicker="Timetable"
          deva="समय सारिणी"
          title="Practise before sunrise, or"
          accent="after work"
          body="Two full batches, six days a week. Members may switch between them whenever the week changes shape."
        />
        <div className="mt-14">
          <ScheduleTabs />
        </div>
      </Section>

      <Section glow="lotus">
        <SectionHeading
          kicker="Why Aadishakti"
          deva="विशेषता"
          title="Small classes. Teachers who"
          accent="actually correct you"
        />
        <div className="mt-14">
          <Benefits />
        </div>
      </Section>

      <Section className="border-cream/10 border-t">
        <SectionHeading
          kicker="Our teachers"
          deva="आचार्य"
          title="Guided by people who have"
          accent="practised for decades"
          body="Between them, our five teachers have spent over sixty years on the mat — and in ashram study, Mysore, and clinical practice."
        />
        <div className="mt-14">
          <Teachers limit={3} />
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              href="/teachers"
              className="group border-cream/20 text-cream hover:border-marigold/50 hover:text-marigold inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm transition-colors"
            >
              Meet all five teachers
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y" glow="violet">
        <SectionHeading
          kicker="Inside the shaala"
          deva="झलक"
          title="A look at"
          accent="our practice"
        />
        <div className="mt-14">
          <Gallery limit={8} />
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="group text-marigold inline-flex items-center gap-2 text-sm tracking-wider uppercase"
            >
              Open the full gallery
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section glow="saffron">
        <SectionHeading
          kicker="In their words"
          deva="अनुभव"
          title="What our students"
          accent="say"
        />
        <div className="mt-14">
          <Testimonials />
        </div>
      </Section>

      <Section id="pricing" className="border-cream/10 border-t" glow="lotus">
        <SectionHeading
          kicker="Membership"
          deva="शुल्क"
          title="Honest pricing, no"
          accent="lock-in"
          body="Every plan covers unlimited classes in your batch, props, and live online access to the same session."
        />
        <div className="mt-16">
          <Pricing />
        </div>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y">
        <SectionHeading kicker="Questions" deva="प्रश्न" title="Before you" accent="begin" />
        <div className="mt-14">
          <Faq />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
