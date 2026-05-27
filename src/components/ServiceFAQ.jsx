export default function ServiceFAQ({ service }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-start">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Common
              <br />
              <span className="text-white/30">questions.</span>
            </h2>
          </div>

          <dl className="lg:col-span-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {service.faqs.map((faq, i) => (
              <div key={i} className="py-8 first:pt-0">
                <dt className="text-base font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/55">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
    </section>
  );
}
