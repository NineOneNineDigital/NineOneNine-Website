"use client";

import { useReveal } from "@/lib/hooks";

const steps = [
  {
    number: "01",
    name: "Discovery",
    description:
      "We start by understanding your business, your users, and the problem you need solved. No assumptions — just focused conversations to define scope, requirements, and success criteria.",
  },
  {
    number: "02",
    name: "Plan & Design",
    description:
      "We map out the architecture, define milestones, and build wireframes. You review everything before a single line of code is written. No surprises downstream.",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Development happens in iterative cycles with regular check-ins. You see working software early and often — not a big reveal at the end.",
  },
  {
    number: "04",
    name: "Launch & Support",
    description:
      "We handle deployment, run final QA, and make sure everything performs under real conditions. Post-launch, we stick around for maintenance and iteration.",
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary-700">
            Process
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-900">
            How we work.
          </h2>
          <p className="mt-5 text-base text-neutral-600 leading-relaxed">
            A straightforward process designed to keep you informed and the
            project on track.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-300 border border-cream-300 rounded-lg overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-cream-50 p-8 lg:p-10 flex flex-col transition-all duration-300 hover:bg-cream-200"
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
              <span className="text-gradient font-mono text-sm font-bold">
                {step.number}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink-900 group-hover:text-primary-700 transition-colors duration-300">
                {step.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
    </section>
  );
}
