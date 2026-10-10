import Image from "next/image";
import Reveal from "./Reveal";
import Embers from "@/components/ui/Embers";

export default function PageHero({
  kicker,
  deva,
  title,
  accent,
  body,
  image,
}: {
  kicker: string;
  deva?: string;
  title: string;
  accent?: string;
  body?: string;
  image: string;
}) {
  return (
    <section className="grain relative flex min-h-[62vh] items-end overflow-hidden pt-32 pb-16 lg:min-h-[68vh] lg:pb-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          loading="eager"
          fetchPriority="high"
          className="animate-kenburns object-cover"
        />
        <div className="from-night via-night/75 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="from-night/90 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      <Embers count={14} />

      <div className="container-x relative">
        <Reveal>
          <p className="text-saffron flex items-center gap-3 text-xs tracking-[0.3em] uppercase">
            <span className="from-saffron h-px w-8 bg-gradient-to-r to-transparent" />
            {kicker}
          </p>
        </Reveal>
        {deva && (
          <Reveal delay={0.06}>
            <p className="font-deva text-marigold/80 mt-4 text-xl">{deva}</p>
          </Reveal>
        )}
        <Reveal delay={0.12}>
          <h1 className="font-display mt-2 max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            {title}
            {accent && (
              <>
                {" "}
                <em className="text-aura not-italic">{accent}</em>
              </>
            )}
          </h1>
        </Reveal>
        {body && (
          <Reveal delay={0.2}>
            <p className="text-cream/65 mt-6 max-w-xl leading-relaxed">{body}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
