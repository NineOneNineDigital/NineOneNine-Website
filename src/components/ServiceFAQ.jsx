"use client";

import { useReveal } from "@/lib/hooks";

export default function ServiceFAQ({ service }) {
  const { ref, revealClass } = useReveal();

  return (
    <section className="py-24 lg:py-36">
      <div ref={ref} className={`reveal shell ${revealClass}`}>
        <div className="flex items-baseline justify-between gap-6 pb-5 rule-b">
          <p className="label">
            <span className="text-gold-500">04</span>
            <span className="ml-3 text-ink-400">Questions</span>
          </p>
          <p className="label text-ink-500">
            {String(service.faqs.length).padStart(2, "0")} answered
          </p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 lg:mt-20">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="display-lg text-ink-50 lg:sticky lg:top-32">
              Common
              <br />
              <span className="text-ink-500">questions.</span>
            </h2>
          </div>

          {/* Answers are rendered open rather than behind a disclosure — this
              page is an SEO landing page, and the copy should be readable
              without interaction. */}
          <dl className="col-span-12 lg:col-span-7 lg:col-start-6">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-x-6 gap-y-3 rule-b py-8 first:border-t first:border-[color:var(--rule)] lg:py-10"
              >
                <span className="col-span-12 font-mono text-[11px] text-gold-500 lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 lg:col-span-11">
                  <dt className="text-lg font-medium leading-snug tracking-[-0.025em] text-ink-50">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 max-w-xl text-[0.9375rem] leading-[1.75] text-ink-400">
                    {faq.answer}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
