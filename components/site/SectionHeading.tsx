import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  deva,
  title,
  accent,
  body,
  align = "center",
  level = 2,
}: {
  kicker?: string;
  deva?: string;
  title: string;
  accent?: string;
  body?: string;
  align?: "center" | "left";
  /** Use 1 when this is the page's leading heading. */
  level?: 1 | 2;
}) {
  const centered = align === "center";
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {kicker && (
        <Reveal>
          <p
            className={`text-saffron flex items-center gap-3 text-xs tracking-[0.3em] uppercase ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className="from-saffron h-px w-8 bg-gradient-to-r to-transparent" />
            {kicker}
            <span className="to-saffron h-px w-8 bg-gradient-to-r from-transparent" />
          </p>
        </Reveal>
      )}
      {deva && (
        <Reveal delay={0.05}>
          <p className="font-deva text-marigold/70 mt-4 text-lg">{deva}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <Heading className="font-display mt-3 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
          {title}
          {accent && (
            <>
              {" "}
              <em className="text-aura not-italic">{accent}</em>
            </>
          )}
        </Heading>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className="text-cream/60 mt-5 leading-relaxed">{body}</p>
        </Reveal>
      )}
    </div>
  );
}
