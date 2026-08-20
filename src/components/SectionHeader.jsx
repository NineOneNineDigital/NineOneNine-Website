"use client";

import { useReveal } from "@/lib/hooks";

/**
 * The one section-opening pattern used across the whole page: an indexed
 * label on a hairline, a serif display heading, and an optional standfirst
 * in the right column. Using it everywhere is what makes the page read as
 * one document rather than a stack of unrelated blocks.
 *
 * @param {string} index   two-digit section number, e.g. "02"
 * @param {string} label   short uppercase label, e.g. "Selected work"
 * @param {node}   title   display heading content
 * @param {node}   standfirst  optional supporting paragraph
 * @param {node}   aside   optional right-aligned metadata beside the label
 */
export default function SectionHeader({
  index,
  label,
  title,
  standfirst,
  aside,
}) {
  const { ref, revealClass } = useReveal();

  return (
    <div ref={ref} className={`reveal ${revealClass}`}>
      <div className="flex items-baseline justify-between gap-6 pb-5 rule-b">
        <p className="label">
          <span className="text-gold-500">{index}</span>
          <span className="ml-3 text-ink-400">{label}</span>
        </p>
        {aside && <p className="label text-ink-500">{aside}</p>}
      </div>

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-6 items-end lg:mt-14">
        <h2 className="display-lg col-span-12 text-ink-50 lg:col-span-7">
          {title}
        </h2>
        {standfirst && (
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-ink-400">
              {standfirst}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
