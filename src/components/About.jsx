"use client";

import { useReveal, useCountUp } from "@/lib/hooks";

function Stat({ value, suffix, label, highlight }) {
  const { ref, count } = useCountUp(parseInt(value), 2000);
  return (
    <div ref={ref}>
      <p
        className={`font-mono text-3xl lg:text-4xl font-bold tracking-tight ${
          highlight ? "text-gradient" : "text-white"
        }`}
      >
        {count}
        {suffix}
      </p>
      <p className="mt-2 font-mono text-xs tracking-wide uppercase text-white/30">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
              About
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Building for the web
              <br />
              <span className="text-white/30">since 2019.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-white/50">
            <p>
              We started NineOneNine to do one thing well — build custom software
              for businesses that have outgrown off-the-shelf tools. Based in
              Raleigh, North Carolina, our team works directly with founders,
              product managers, and operators to turn ideas into production-ready
              applications.
            </p>
            <p>
              We handle the full stack. From database architecture to the pixels
              on screen, every project gets the same level of care whether
              {"it's"} a single landing page or a complex multi-tenant platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <Stat value="10" suffix="+" label="Years experience" />
              <Stat value="50" suffix="+" label="Projects shipped" />
              <Stat value="100" suffix="%" label="Custom built" highlight />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
    </section>
  );
}
