"use client";

import { ValidationError, useForm } from "@formspree/react";
import { useReveal } from "@/lib/hooks";

// Underline fields rather than boxed inputs — fewer competing rectangles,
// and it keeps the form on the same ruled grid as the rest of the page.
const FIELD =
  "block w-full border-0 border-b border-[color:var(--rule-strong)] bg-transparent px-0 py-3 text-[0.9375rem] text-ink-50 placeholder:text-ink-600 focus:border-gold-500 focus:outline-none focus:ring-0 transition-colors duration-300";

const FIELD_LABEL = "label mb-3 block text-ink-500";

function SuccessMessage() {
  return (
    <div className="rule-t rule-b py-14">
      <p className="label text-gold-500">Message received</p>
      <p className="prose-editorial mt-5 max-w-md text-ink-100">
        Thanks — we have it. You will hear back from us within one business day.
      </p>
    </div>
  );
}

function Form() {
  const [state, handleSubmit] = useForm("mreypprw");

  if (state.succeeded) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={FIELD_LABEL}>
            First name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            autoComplete="given-name"
            className={FIELD}
            placeholder="Jane"
          />
          <ValidationError
            prefix="First Name"
            field="firstName"
            errors={state.errors}
            className="mt-2 text-xs text-danger"
          />
        </div>

        <div>
          <label htmlFor="lastName" className={FIELD_LABEL}>
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            autoComplete="family-name"
            className={FIELD}
            placeholder="Smith"
          />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
            className="mt-2 text-xs text-danger"
          />
        </div>

        <div>
          <label htmlFor="email" className={FIELD_LABEL}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="email"
            className={FIELD}
            placeholder="jane@company.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-xs text-danger"
          />
        </div>

        <div>
          <label htmlFor="website" className={FIELD_LABEL}>
            Website — optional
          </label>
          <input
            type="url"
            name="website"
            id="website"
            autoComplete="url"
            className={FIELD}
            placeholder="https://"
          />
          <ValidationError
            prefix="Website"
            field="website"
            errors={state.errors}
            className="mt-2 text-xs text-danger"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={FIELD_LABEL}>
            What are you looking to build?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={`${FIELD} resize-none`}
            placeholder="A sentence or two is plenty to start."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-xs text-danger"
          />
        </div>
      </div>

      <div className="mt-12">
        <button
          type="submit"
          disabled={state.submitting}
          className="group inline-flex items-center gap-3 bg-ink-50 px-8 py-4 text-sm font-medium text-ink-950 transition-colors duration-300 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>{state.submitting ? "Sending" : "Send message"}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
        <ValidationError
          errors={state.errors}
          className="mt-3 text-xs text-danger"
        />
      </div>
    </form>
  );
}

export default function Contact() {
  const { ref, revealClass } = useReveal();

  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-36">
      <div ref={ref} className={`reveal shell ${revealClass}`}>
        <div className="flex items-baseline justify-between gap-6 pb-5 rule-b">
          <p className="label">
            <span className="text-gold-500">06</span>
            <span className="ml-3 text-ink-400">Contact</span>
          </p>
          <p className="label hidden text-ink-500 sm:block">Replies within a business day</p>
        </div>

        <h2 className="display-xl mt-12 text-ink-50 lg:mt-16">
          Let&rsquo;s build
          <br />
          <span className="text-gold-400">something</span>{" "}
          together.
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14 lg:mt-24">
          <div className="col-span-12 lg:col-span-3">
            <dl className="space-y-8">
              <div>
                <dt className="label text-ink-500">Email</dt>
                <dd className="mt-2">
                  <a
                    href="mailto:hello@nineoneninedigital.com"
                    className="link-underline text-[0.9375rem]"
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

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
