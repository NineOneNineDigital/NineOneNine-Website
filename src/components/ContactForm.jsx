"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useCallback, useEffect, useRef } from "react";
import { useReveal } from "@/lib/hooks";
import { trackEvent } from "@/lib/measurement";

// Underline fields rather than boxed inputs — fewer competing rectangles,
// and it keeps the form on the same ruled grid as the rest of the page.
const FIELD =
  "block w-full border-0 border-b border-[color:var(--rule-strong)] bg-transparent px-0 py-3 text-[0.9375rem] text-ink-50 placeholder:text-ink-600 focus:border-gold-500 focus:outline-none focus:ring-0 transition-colors duration-300";

const FIELD_LABEL = "label mb-3 block text-ink-400";

function SuccessMessage() {
  return (
    <div className="rule-t rule-b py-14" role="status">
      <p className="label text-gold-500">Message received</p>
      <p className="prose-editorial mt-5 max-w-md text-ink-100">
        Thanks for telling us about your project. We will reply by email within
        one business day to discuss your goals and the next steps.
      </p>
    </div>
  );
}

function Form() {
  const [state, handleSubmit] = useForm("mreypprw");
  const started = useRef(false);
  const recordedSuccess = useRef(false);
  const handleInput = useCallback(() => {
    if (!started.current) {
      started.current = true;
      trackEvent("form_start", "contact_form");
    }
  }, []);

  useEffect(() => {
    if (state.succeeded && !recordedSuccess.current) {
      recordedSuccess.current = true;
      trackEvent("generate_lead", "contact_form");
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return <SuccessMessage />;
  }

  return (
    <form
      action="https://formspree.io/f/mreypprw"
      method="POST"
      onInput={handleInput}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
        <div>
          <label className={FIELD_LABEL} htmlFor="name">
            Name
          </label>
          <input
            autoComplete="name"
            className={FIELD}
            id="name"
            name="name"
            placeholder="Jane Smith"
            required
            type="text"
          />
          <ValidationError
            className="mt-2 text-danger text-xs"
            errors={state.errors}
            field="name"
            prefix="Name"
          />
        </div>

        <div>
          <label className={FIELD_LABEL} htmlFor="email">
            Email
          </label>
          <input
            autoComplete="email"
            className={FIELD}
            id="email"
            name="email"
            placeholder="jane@company.com"
            required
            type="email"
          />
          <ValidationError
            className="mt-2 text-danger text-xs"
            errors={state.errors}
            field="email"
            prefix="Email"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={FIELD_LABEL} htmlFor="website">
            Website — optional
          </label>
          <input
            autoComplete="url"
            className={FIELD}
            id="website"
            name="website"
            placeholder="https://"
            type="url"
          />
          <ValidationError
            className="mt-2 text-danger text-xs"
            errors={state.errors}
            field="website"
            prefix="Website"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={FIELD_LABEL} htmlFor="message">
            What would you like to achieve?
          </label>
          <textarea
            aria-describedby="message-hint"
            className={`${FIELD} resize-none`}
            id="message"
            name="message"
            placeholder="For example: more website inquiries, an online store, or less manual work for our team."
            required
            rows={4}
          />
          <p
            className="mt-3 text-ink-400 text-sm leading-relaxed"
            id="message-hint"
          >
            A few sentences are enough. You do not need a technical brief.
          </p>
          <ValidationError
            className="mt-2 text-danger text-xs"
            errors={state.errors}
            field="message"
            prefix="Message"
          />
        </div>
      </div>

      <div className="mt-12">
        <button
          className="group inline-flex items-center gap-3 bg-ink-50 px-8 py-4 font-medium text-ink-950 text-sm transition-colors duration-300 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={state.submitting}
          type="submit"
        >
          <span>{state.submitting ? "Sending" : "Discuss my project"}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
        <p className="mt-4 text-ink-400 text-sm">
          Expect a reply within one business day.
        </p>
        <ValidationError
          className="mt-3 text-danger text-xs"
          errors={state.errors}
        />
      </div>
    </form>
  );
}

export default function Contact() {
  const { ref, revealClass } = useReveal();

  return (
    <section className="scroll-mt-24 py-24 lg:py-36" id="contact">
      <div className={`reveal shell ${revealClass}`} ref={ref}>
        <div className="rule-b flex items-baseline justify-between gap-6 pb-5">
          <p className="label">
            <span className="text-gold-500">06</span>
            <span className="ml-3 text-ink-400">Contact</span>
          </p>
          <p className="label hidden text-ink-500 sm:block">
            Replies within a business day
          </p>
        </div>

        <h2 className="display-xl mt-12 text-ink-50 lg:mt-16">
          It starts with
          <br />
          <span className="text-gold-400">a conversation.</span>
        </h2>
        <p className="prose-editorial mt-6 max-w-xl">
          Tell us what you want to improve. We will help you explore the right
          approach for your business.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 lg:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label">What happens next</p>
            <ol className="mt-5 mb-10 space-y-4 text-ink-300 text-sm leading-relaxed">
              <li>
                <span className="mr-3 font-mono text-gold-400">01</span>We reply
                within one business day.
              </li>
              <li>
                <span className="mr-3 font-mono text-gold-400">02</span>We
                discuss your goals, timeline, and fit.
              </li>
              <li>
                <span className="mr-3 font-mono text-gold-400">03</span>If we
                are a fit, you receive a scoped proposal with fixed pricing.
              </li>
            </ol>
            <dl className="space-y-8">
              <div>
                <dt className="label text-ink-500">Email</dt>
                <dd className="mt-2">
                  <a
                    className="link-underline text-[0.9375rem]"
                    href="mailto:hello@nineoneninedigital.com"
                  >
                    hello@nineoneninedigital.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-ink-500">Based in</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink-200">
                  Raleigh, North Carolina
                </dd>
              </div>
              <div>
                <dt className="label text-ink-500">Engagements</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink-200">
                  Project &amp; retainer
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
