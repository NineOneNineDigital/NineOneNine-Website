"use client";

import Link from "next/link";
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
    <section className="scroll-mt-24 py-24 lg:py-36" id="about">
      <div className="shell">
        <SectionHeader
          index="02"
          label="About"
          standfirst="No account layer, no handoff to a junior team. The people who scope your project are the people who build it."
          title={
            <>
              A small team,
              <br />
              <span className="text-ink-500">deliberately.</span>
            </>
          }
        />

        <div
          className={`reveal mt-16 grid grid-cols-12 gap-x-6 gap-y-14 lg:mt-24 ${bodyClass}`}
          ref={bodyRef}
        >
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-7">
              <p className="prose-editorial text-ink-200">
                Founded in 2019 and based in Raleigh, North Carolina,
                NineOneNine Digital builds custom software for businesses that
                have outgrown off-the-shelf tools. We work directly with
                founders, product managers, and operators to turn a rough idea
                into something in production.
              </p>
              <p className="prose-editorial">
                Our website work includes custom home builders, residential
                designers, and automotive businesses. Explore the{" "}
                <Link className="link-underline" href="/work/dealer-lifts">
                  Dealer Lifts project
                </Link>{" "}
                for website and eCommerce work, or{" "}
                <Link className="link-underline" href="/work/bost-homes">
                  Bost Homes
                </Link>{" "}
                for a custom home builder website.
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
                  className="rule-b flex items-baseline justify-between gap-6 py-4 first:border-[color:var(--rule)] first:border-t"
                  key={fact.label}
                >
                  <dt className="label text-ink-500">{fact.label}</dt>
                  <dd className="font-medium text-base text-ink-100 tracking-[-0.02em]">
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
