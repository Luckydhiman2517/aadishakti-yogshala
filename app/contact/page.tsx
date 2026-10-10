import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";
import Reveal from "@/components/site/Reveal";
import Faq from "@/components/site/Faq";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & book a trial",
  description:
    "Book a free trial class at Aadishakti Yogshaala, or ask us anything about the morning and evening batches, teacher training and yoga therapy.",
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    SITE.mapQuery,
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <Section pad={false} className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              level={1}
              kicker="Contact"
              deva="सम्पर्क"
              title="Come and try a"
              accent="class, free"
              body="Tell us a little about yourself and we will suggest a batch and a starting class. Or simply call — we answer between 5 AM and 9 PM."
            />

            <Reveal delay={0.12}>
              <ul className="mt-9 space-y-5">
                <ContactRow icon={<MapPin className="size-5" />} label="Visit">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </ContactRow>
                <ContactRow icon={<Phone className="size-5" />} label="Call" href={SITE.phoneHref}>
                  {SITE.phone}
                </ContactRow>
                <ContactRow
                  icon={<MessageCircle className="size-5" />}
                  label="WhatsApp"
                  href={SITE.whatsapp}
                >
                  Message us for timetable updates
                </ContactRow>
                <ContactRow
                  icon={<Mail className="size-5" />}
                  label="Email"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </ContactRow>
                <ContactRow icon={<Clock className="size-5" />} label="Hours">
                  {SITE.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days} — <span className="text-cream/50">{h.time}</span>
                    </span>
                  ))}
                </ContactRow>
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-cream/10 mt-10 overflow-hidden rounded-3xl border">
                <iframe
                  src={mapSrc}
                  title={`Map showing ${SITE.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full grayscale-[0.35] contrast-[1.1]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1}>
            <div>
              <h2 className="font-display text-3xl">Book a free trial class</h2>
              <p className="text-cream/55 mt-2 text-sm">
                No payment, no commitment. We will confirm by phone.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-night-2/40 border-cream/10 border-y" glow="saffron">
        <SectionHeading kicker="Questions" deva="प्रश्न" title="Answered" accent="already" />
        <div className="mt-14">
          <Faq />
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const body = (
    <>
      <span className="from-saffron/15 to-lotus/10 text-marigold ring-marigold/20 grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ring-1">
        {icon}
      </span>
      <span>
        <span className="text-cream/40 block text-[0.65rem] tracking-[0.2em] uppercase">
          {label}
        </span>
        <span className="text-cream/80 mt-1 block leading-relaxed">{children}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group hover:border-marigold/30 border-cream/10 flex gap-4 rounded-2xl border p-4 transition-colors"
        >
          {body}
        </a>
      ) : (
        <div className="border-cream/10 flex gap-4 rounded-2xl border p-4">{body}</div>
      )}
    </li>
  );
}
