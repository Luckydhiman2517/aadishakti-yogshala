import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import Gallery from "@/components/site/Gallery";
import Marquee from "@/components/site/Marquee";
import CtaBanner from "@/components/site/CtaBanner";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside Aadishakti Yogshaala — morning batches, teacher training cohorts, the Himalayan retreat and the halls themselves.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        deva="झलक"
        title="Inside the"
        accent="shaala"
        body="Mornings on the terrace, the Shakti Hall mid-sequence, training cohorts and the river at dawn. Tap any image to open it."
        image={IMG.handstandArches}
      />

      <Section>
        <Gallery />
      </Section>

      <Marquee />
      <CtaBanner />
    </>
  );
}
