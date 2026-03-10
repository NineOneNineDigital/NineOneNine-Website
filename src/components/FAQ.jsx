"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { faqs } from "@/lib/constants";
import { useReveal } from "@/lib/hooks";

export default function FAQ() {
  const ref = useReveal();

  return (
    <section id="faq" className="scroll-mt-24 py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Common
              <br />
              questions.
            </h2>
          </div>

          <div className="lg:col-span-3">
            <dl className="divide-y divide-white/[0.06]">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.id}>
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton className="flex w-full items-center justify-between py-6 text-left group">
                          <span className="text-sm font-medium text-white group-hover:text-primary transition-colors duration-200">
                            {faq.question}
                          </span>
                          <PlusIcon
                            className={`ml-4 h-4 w-4 flex-none text-white/20 transition-all duration-300 ${
                              open ? "rotate-45 text-primary/60" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="pb-6 pr-12">
                        <p className="text-sm leading-relaxed text-white/40">
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
      </div>

      {/* Bottom line */}
      <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
    </section>
  );
}
