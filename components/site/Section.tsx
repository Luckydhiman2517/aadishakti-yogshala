import type { ReactNode } from "react";

/** Standard vertical rhythm + optional ambient glow behind a section. */
export default function Section({
  children,
  id,
  className = "",
  glow,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  glow?: "saffron" | "lotus" | "violet" | "none";
}) {
  const glowTint = {
    saffron: "bg-saffron/10",
    lotus: "bg-lotus/10",
    violet: "bg-violet/12",
    none: "",
  }[glow ?? "none"];

  return (
    <section id={id} className={`relative overflow-hidden py-24 lg:py-32 ${className}`}>
      {glow && glow !== "none" && (
        <div
          aria-hidden
          className={`pointer-events-none absolute top-0 left-1/2 size-[40rem] -translate-x-1/2 rounded-full blur-[150px] ${glowTint}`}
        />
      )}
      <div className="container-x relative">{children}</div>
    </section>
  );
}
