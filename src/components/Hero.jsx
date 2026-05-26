"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/lib/hooks";

const KINETIC_WORDS = [
  "software",
  "mobile apps",
  "commerce",
  "platforms",
  "interfaces",
  "APIs",
];

const TECH_MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Tailwind",
  "Stripe",
  "Vercel",
  "AWS",
  "Prisma",
  "Supabase",
];

function KineticWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % KINETIC_WORDS.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  // Reserve width for the longest word so layout doesn't jump.
  const widthAnchor = KINETIC_WORDS.reduce(
    (a, b) => (b.length > a.length ? b : a),
    ""
  );

  return (
    <span className="relative inline-block align-baseline overflow-hidden">
      <span aria-hidden="true" className="invisible whitespace-nowrap">
        {widthAnchor}
      </span>
      <span
        key={index}
        className="animate-word-in absolute inset-0 font-serif italic font-light text-primary whitespace-nowrap"
      >
        {KINETIC_WORDS[index]}
      </span>
    </span>
  );
}

function Marquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <div className="marquee-mask overflow-hidden border-y border-white/[0.04] py-5">
      <div className="animate-marquee flex w-max items-center gap-12">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 font-mono text-xs tracking-[0.3em] uppercase text-white/35"
          >
            {item}
            <span aria-hidden="true" className="text-primary/40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Off-center ambient glow — bottom-left, asymmetric */}
      <div className="animate-ambient absolute -bottom-32 -left-32 w-[720px] h-[720px] rounded-full bg-primary/[0.08] blur-[140px]" />
      {/* Secondary accent — top-right */}
      <div className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-primary/[0.04] blur-[100px]" />

      {/* Top utility row — spans full width below header */}
      <div className="relative z-10 pt-32 lg:pt-36">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-end text-[10px] font-mono tracking-[0.3em] uppercase">
          <div className="flex items-center gap-6 text-white/30">
            <span>Raleigh, NC</span>
            <span className="h-px w-6 bg-white/15" />
            <span>Est. 2019</span>
          </div>
        </div>
      </div>

      {/* Main editorial block */}
      <div ref={ref} className="reveal relative z-10 flex-1 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
            {/* Headline — left, oversized, asymmetric */}
            <h1 className="col-span-12 lg:col-span-8 text-white font-bold tracking-[-0.03em] leading-[0.92] text-[clamp(3.5rem,11vw,9rem)]">
              <span className="block">We build</span>
              <span className="block">
                <KineticWord />
              </span>
              <span className="block text-white/85">— end to end.</span>
            </h1>

            {/* Right meta column */}
            <div className="col-span-12 lg:col-span-4 lg:pb-6 flex flex-col gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
                  <span className="h-px w-6 bg-white/20" />
                  <span>01 — Studio</span>
                </div>
                <p className="text-base text-white/55 leading-relaxed max-w-sm">
                  A software studio building custom web applications, mobile
                  apps, eCommerce, and APIs for teams that need more than a
                  template.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-between gap-4 bg-primary text-black font-mono text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-primary-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(205,164,0,0.25)]"
                >
                  <span>Start a project</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href="#work"
                  className="group inline-flex items-center justify-between gap-4 font-mono text-xs tracking-[0.2em] uppercase text-white/60 px-6 py-4 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  <span>Selected work</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↘
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10">
        <Marquee />
      </div>
    </section>
  );
}
