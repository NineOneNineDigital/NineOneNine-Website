"use client";

import { ValidationError, useForm } from "@formspree/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useReveal } from "@/lib/hooks";

function SuccessMessage() {
  return (
    <div className="border border-success/30 bg-success/5 p-10 text-center rounded-lg">
      <CheckCircleIcon className="mx-auto h-8 w-8 text-success" />
      <p className="mt-4 text-sm font-medium text-ink-900">
        Message received. We will be in touch shortly.
      </p>
    </div>
  );
}

function Form() {
  const [state, handleSubmit] = useForm("mreypprw");

  if (state.succeeded) {
    return <SuccessMessage />;
  }

  const inputClass =
    "block w-full bg-cream-50 border border-cream-300 rounded-md px-4 py-3.5 text-sm text-ink-900 placeholder:text-neutral-400 focus:border-primary/60 focus:bg-cream-50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-300";

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block font-mono text-xs tracking-wide uppercase text-neutral-600 mb-2.5"
          >
            First name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            autoComplete="given-name"
            className={inputClass}
            placeholder="Jane"
          />
          <ValidationError
            prefix="First Name"
            field="firstName"
            errors={state.errors}
            className="mt-1 text-xs text-danger"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block font-mono text-xs tracking-wide uppercase text-neutral-600 mb-2.5"
          >
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            autoComplete="family-name"
            className={inputClass}
            placeholder="Smith"
          />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
            className="mt-1 text-xs text-danger"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs tracking-wide uppercase text-neutral-600 mb-2.5"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@company.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-xs text-danger"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block font-mono text-xs tracking-wide uppercase text-neutral-600 mb-2.5"
          >
            Website (optional)
          </label>
          <input
            type="url"
            name="website"
            id="website"
            autoComplete="url"
            className={inputClass}
            placeholder="https://"
          />
          <ValidationError
            prefix="Website"
            field="website"
            errors={state.errors}
            className="mt-1 text-xs text-danger"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block font-mono text-xs tracking-wide uppercase text-neutral-600 mb-2.5"
          >
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={inputClass + " resize-none"}
            placeholder="What are you looking to build?"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-1 text-xs text-danger"
          />
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full sm:w-auto font-mono text-sm tracking-wide uppercase rounded-lg bg-primary text-ink-900 px-10 py-4 hover:bg-primary-700 hover:text-cream-50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(205,164,0,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send message"}
        </button>
        <ValidationError
          errors={state.errors}
          className="mt-2 text-xs text-danger"
        />
      </div>
    </form>
  );
}

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary-700">
              Contact
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-900 leading-tight">
              {"Let's work"}
              <br />
              together.
            </h2>
            <p className="mt-5 text-base text-neutral-600 leading-relaxed">
              Have a project in mind? Send us a message and {"we'll"} get back to
              you within one business day.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="font-mono text-xs tracking-wide uppercase text-neutral-600">
                  Location
                </p>
                <p className="mt-1.5 text-ink-800">Raleigh, North Carolina</p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-wide uppercase text-neutral-600">
                  Email
                </p>
                <a
                  href="mailto:hello@nineoneninedigital.com"
                  className="mt-1.5 block text-teal-700 hover:text-teal-900 transition-colors duration-200"
                >
                  hello@nineoneninedigital.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
