"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { faqs } from "@/lib/constants";
import { useReveal } from "@/lib/hooks";

export default function FAQ() {
  const { ref, revealClass } = useReveal();

  return (
    <section id="faq" className="scroll-mt-24 py-24 lg:py-36">
      <div ref={ref} className={`reveal shell ${revealClass}`}>
        <div className="flex items-baseline justify-between gap-6 pb-5 rule-b">
          <p className="label">
            <span className="text-gold-500">05</span>
            <span className="ml-3 text-ink-400">Questions</span>
          </p>
          <p className="label text-ink-500">
            {String(faqs.length).padStart(2, "0")} answered
          </p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 lg:mt-20">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="display-lg text-ink-50">
                Before you
                <br />
                <span className="text-ink-500">ask.</span>
              </h2>
              <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-ink-400">
                Still unanswered?{" "}
                <a href="/#contact" className="link-underline">
                  Send it over
                </a>{" "}
                — we reply within a business day.
              </p>
            </div>
          </div>

          <dl className="col-span-12 lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <Disclosure
                as="div"
                key={faq.id}
                className="rule-b first:border-t first:border-[color:var(--rule)]"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="group flex w-full items-baseline gap-6 py-7 text-left">
                        <span className="font-mono text-[11px] text-ink-600 transition-colors duration-300 group-hover:text-gold-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-lg font-medium leading-snug tracking-[-0.025em] text-ink-100 transition-colors duration-300 group-hover:text-ink-50">
                          {faq.question}
                        </span>
                        {/* Plus sign drawn from two rules — rotates to a
                            minus when the panel is open. */}
                        <span
                          aria-hidden="true"
                          className="relative mt-2 h-3 w-3 flex-none"
                        >
                          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-ink-500 transition-colors duration-300 group-hover:bg-gold-400" />
                          <span
                            className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink-500 transition-all duration-500 group-hover:bg-gold-400 ${
                              open ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="pb-8 pl-[calc(0.75rem+1.5rem)] pr-8">
                      <p className="max-w-xl text-[0.9375rem] leading-[1.75] text-ink-400">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
