"use client";

import { useReveal } from "@/lib/hooks";

const steps = [
  {
    number: "01",
    name: "Discovery",
    description:
      "We start by understanding your business, your users, and the problem you need solved. No assumptions — focused conversations to define scope, requirements, and what success actually looks like.",
  },
  {
    number: "02",
    name: "Plan & design",
    description:
      "We map the architecture, define milestones, and build wireframes. You review all of it before a single line of code is written, so there are no surprises downstream.",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Development runs in iterative cycles with regular check-ins. You see working software early and often — not a big reveal at the end.",
  },
  {
    number: "04",
    name: "Launch & support",
    description:
      "We handle deployment, run final QA, and confirm everything performs under real conditions. After launch we stay on for maintenance and iteration.",
  },
];

export default function Process() {
  const { ref, revealClass } = useReveal();

  return (
    <section className="py-24 lg:py-36">
      <div ref={ref} className={`reveal shell ${revealClass}`}>
        <div className="flex items-baseline justify-between gap-6 pb-5 rule-b">
          <p className="label">
            <span className="text-gold-500">04</span>
            <span className="ml-3 text-ink-400">Process</span>
          </p>
          <p className="label text-ink-500">Four stages</p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-14 lg:mt-20">
          {/* Sticky heading — stays put while the stages scroll past it. */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="display-lg text-ink-50">
                How we
                <br />
                <span className="text-ink-500">work.</span>
              </h2>
              <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-ink-400">
                The same sequence every time. It is deliberately unremarkable —
                predictability is the point.
              </p>
            </div>
          </div>

          <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-12 gap-x-6 gap-y-3 rule-b py-8 first:border-t first:border-[color:var(--rule)] lg:py-10"
              >
                <span className="col-span-12 font-mono text-[11px] text-gold-500 lg:col-span-1">
                  {step.number}
                </span>
                <div className="col-span-12 lg:col-span-11">
                  <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] text-ink-50">
                    {step.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-400">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
