import Link from "next/link";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="scroll-mt-24 py-24 lg:py-36" id="faq">
      <div className="shell">
        <div className="rule-b flex items-baseline justify-between gap-6 pb-5">
          <p className="label">
            <span className="text-gold-500">05</span>
            <span className="ml-3 text-ink-400">Questions</span>
          </p>
          <p className="label text-ink-500">
            {String(faqs.length).padStart(2, "0")} answered
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="display-lg text-ink-50">
                Before you
                <br />
                <span className="text-ink-500">ask.</span>
              </h2>
              <p className="mt-6 max-w-xs text-[0.9375rem] text-ink-400 leading-relaxed">
                Still unanswered?{" "}
                <Link className="link-underline" href="/#contact">
                  Send it over
                </Link>{" "}
                — we reply within a business day.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <details
                className="group rule-b first:border-[color:var(--rule)] first:border-t"
                key={faq.id}
              >
                <summary className="flex w-full cursor-pointer list-none items-baseline gap-6 py-7 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-[11px] text-ink-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-medium text-ink-100 text-lg leading-snug tracking-[-0.025em]">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-2 h-3 w-3 flex-none"
                  >
                    <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-ink-400" />
                    <span className="absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-ink-400 transition-transform group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-xl pr-8 pb-8 pl-[calc(0.75rem+1.5rem)] text-[0.9375rem] text-ink-400 leading-[1.75]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
