import Wordmark from "@/components/Wordmark";
import { navigation } from "@/lib/constants";
import { servicePageList } from "@/lib/services-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rule-t">
      <div className="shell py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <Wordmark className="text-3xl" />
            <p className="prose-editorial mt-5 max-w-sm text-ink-400">
              Software development in Raleigh, North Carolina — custom
              applications, built end to end.
            </p>
            <a
              href="mailto:hello@nineoneninedigital.com"
              className="link-underline mt-8 inline-block text-[0.9375rem]"
            >
              hello@nineoneninedigital.com
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-6 lg:col-span-3 lg:col-start-7"
          >
            <p className="label text-ink-600">Site</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-400 transition-colors duration-300 hover:text-ink-50"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-ink-400 transition-colors duration-300 hover:text-ink-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav
            aria-label="Services"
            className="col-span-6 lg:col-span-3 lg:col-start-10"
          >
            <p className="label text-ink-600">Services</p>
            <ul className="mt-5 space-y-3">
              {servicePageList.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/services/${service.slug}`}
                    className="text-sm text-ink-400 transition-colors duration-300 hover:text-ink-50"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 rule-t pt-7 sm:flex-row">
          <p className="label text-ink-600">
            &copy; {currentYear} NineOneNine, Inc.
          </p>
          <p className="label text-ink-600">Built in Raleigh, North Carolina</p>
        </div>
      </div>
    </footer>
  );
}
