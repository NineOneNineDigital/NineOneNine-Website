import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center pt-28">
        <div className="shell w-full">
          <div className="rule-b flex items-baseline justify-between gap-6 pb-5">
            <p className="label">
              <span className="text-gold-500">404</span>
              <span className="ml-3 text-ink-400">Not found</span>
            </p>
            <p className="label text-ink-500">Raleigh, North Carolina</p>
          </div>

          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-10 py-20 lg:py-32">
            <h1 className="display-xl col-span-12 text-ink-50 lg:col-span-7">
              This page
              <br />
              <span className="text-ink-500">moved on.</span>
            </h1>

            <div className="col-span-12 flex flex-col gap-8 lg:col-span-4 lg:col-start-9 lg:pb-4">
              <p className="prose-editorial max-w-sm">
                The link is broken or the page has been retired. The work is
                still where you left it.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  className="group inline-flex items-center gap-3 bg-ink-50 px-7 py-4 font-medium text-ink-950 text-sm transition-colors duration-300 hover:bg-gold-400"
                  href="/"
                >
                  <span>Back home</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  className="link-underline text-ink-200 text-sm hover:text-ink-50"
                  href="/#contact"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
