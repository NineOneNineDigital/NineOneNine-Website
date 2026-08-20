"use client";

import SectionHeader from "@/components/SectionHeader";
import { useReveal } from "@/lib/hooks";

// Static facts, set as a ruled table. These were previously animated
// counters; the numbers say the same thing without the theatre.
const FACTS = [
  { label: "Founded", value: "2019" },
  { label: "Based in", value: "Raleigh, NC" },
  { label: "Projects shipped", value: "50+" },
  { label: "Built from scratch", value: "100%" },
];

export default function About() {
  const { ref: bodyRef, revealClass: bodyClass } = useReveal();

  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="02"
          label="About"
          title={
            <>
              A small team,
              <br />
              <span className="text-ink-500">deliberately.</span>
            </>
          }
          standfirst="No account layer, no handoff to a junior team. The people who scope your project are the people who build it."
        />

        <div
          ref={bodyRef}
          className={`reveal mt-16 grid grid-cols-12 gap-x-6 gap-y-14 lg:mt-24 ${bodyClass}`}
        >
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-7">
              <p className="prose-editorial text-ink-200">
                We started NineOneNine to do one thing well — build custom
                software for businesses that have outgrown off-the-shelf tools.
                We work directly with founders, product managers, and operators
                to turn a rough idea into something in production.
              </p>
              <p className="prose-editorial">
                We handle the full stack. Database architecture through to the
                pixels on screen, every project gets the same attention whether
                it is a single marketing site or a multi-tenant platform. We
                choose tools that will still be maintainable in three years, not
                the ones that trended last quarter.
              </p>
            </div>
          </div>

          {/* Ruled fact table */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <dl>
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 rule-b py-4 first:border-t first:border-[color:var(--rule)]"
                >
                  <dt className="label text-ink-500">{fact.label}</dt>
                  <dd className="text-base font-medium tracking-[-0.02em] text-ink-100">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
