"use client";

import { useReveal } from "@/lib/hooks";

export default function ServiceCTA({ service }) {
  const { ref, revealClass } = useReveal();

  return (
    <section className="pt-12 pb-24 lg:pt-20 lg:pb-36">
      <div className={`reveal shell ${revealClass}`} ref={ref}>
        <div className="rule-t pt-14 lg:pt-20">
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <p className="label text-ink-500">Next step</p>
              <h2 className="display-lg mt-6 text-ink-50">
                Let&rsquo;s build your
                <br />
                <span className="text-gold-400">
                  {service.name.toLowerCase()}
                </span>
                .
              </h2>
            </div>

            <div className="col-span-12 flex flex-col gap-7 lg:col-span-4 lg:col-start-9 lg:pb-3">
              <p className="text-[0.9375rem] text-ink-400 leading-relaxed">
                Tell us what you are building. We reply within one business day
                with honest next steps — or a referral if we are not the right
                fit for it.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  className="group inline-flex items-center gap-3 bg-ink-50 px-7 py-4 font-medium text-ink-950 text-sm transition-colors duration-300 hover:bg-gold-400"
                  href="/#contact"
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
                  className="link-underline text-ink-200 text-sm hover:text-ink-50"
                  href="/#services"
                >
                  All services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
