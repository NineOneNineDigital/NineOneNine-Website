"use client";

import { ValidationError, useForm } from "@formspree/react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const navigation = {
  main: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#FAQ" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
const services = [
  {
    name: "Custom Web Application Development",
    description:
      "Internet of Things apps. Systems for managing customer relationships (CRMs). social media sites. Tools for visualizing data. These are but a handful of the numerous varieties of customized web applications with which we deal on a daily basis.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "eCommerce Development",
    description:
      "Create user-friendly storefronts that provide enjoyable shopping experiences. Incorporate payment processing systems, customer service chatbots, checkout systems, and more.",
    icon: LockClosedIcon,
  },
  {
    name: "Front-End Design & Development",
    description:
      "First impressions matter. Since the front end is the part of web development solutions that users can see and interact with, it must be intuitive and engaging. It should provide fast loading times and responsive layouts so users can find everything they need quickly and easily.",
    icon: ArrowPathIcon,
  },
  {
    name: "Back-End Web Development",
    description:
      "Even though the back end of a website is hidden from view, it is central to the web development process. This is the powerhouse of web development—the infrastructure of web solutions. It focuses on the logic, functionality, and database interactions. ",
    icon: FingerPrintIcon,
  },
  {
    name: "Content Management System (CMS) Development",
    description:
      "Simplify content management. With a robust CMS, you can create, store, and publish digital content without extensive technical knowledge. You can also visualize performance and user interactions to inform your business strategy.",
    icon: FingerPrintIcon,
  },
  {
    name: "API Development and Integration",
    description:
      "When you access location-based services, make purchases on e-commerce websites, or book flights online, that's all thanks to APIs. Application Programming Interfaces are central to many of the services we use every day, sharing and communicating data seamlessly among apps.",
    icon: FingerPrintIcon,
  },
];

const faqs = [
  {
    id: 1,
    question: "How long does it take?",
    answer:
      "The average time to develop a custom website is 4 to 12 weeks, application may take longer, but this can vary depending on the size and complexity of the project.",
  },
  {
    id: 2,
    question: "How much does it cost?",
    answer:
      "The rates for custom website or application development services will vary depending on the company, the scope of the project, and the amount of time and effort required. At NineOneNine, we offer custom website or application development services that are designed to meet the specific needs of our clients. We take an individualized approach to each project, and our team of experts will work with you to create a custom project that meets your specific goals. Contact us today to get started!",
  },
  {
    id: 3,
    question: "How involved will I be in the design and development stages?",
    answer:
      "As the client you can be involved in the design process as much as you feel comfortable. NineOneNine will keep you updated on the progress of the project and should welcome any feedback or input throughout the web development process. ",
  },
  {
    id: 3,
    question: "How much do you charge for simple updates?",
    answer:
      "Depending on the type of update you are looking to implement, we have a range of pricing options that are determined by the experience level you are looking for in a developer. In short, our web development service has you covered!",
  },
  {
    id: 4,
    question: "What tools do you use for development?",
    answer:
      "The coding languages used for custom website development are typically ones that are widely used and well-supported (e.g. HTML5, React.js, Javascript, etc.). The content management system (CMS) depends on the project, but it will be one that is easy to use and maintain.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NineOneNine</span>
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">nineonenine</span>
                <Image
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.main.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        <div className="relative isolate overflow-hidden pt-14">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=303030&sat=-100&exp=&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Welcome to nineonenine
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                {
                  "We're a custom web design and development company based in Raleigh, North Carolina"
                }
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="bg-black px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-primary">
              Who are we?
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We’re A Web Development Agency.
            </h1>
            <p className="mt-6 text-lg leading-6  text-gray-500">
              Started in 2019, we have been committed to delivering the highest
              level of service to our clients. We build custom web and mobile
              applications for individuals and businesses across many different
              industries. Our goal is to help bring concepts and ideas to life
              for our clients while building strong relationships.
            </p>
            <p className="mt-6 text-lg leading-6  text-gray-500">
              No matter the size or the scope of your project, we can discuss a
              plan to build a website or application that is specific to your
              needs. We will be there every step of the way to ensure a seamless
              process.
            </p>
            <p className="mt-6 text-lg leading-6 text-gray-500">
              If you are ready to take your idea to the next level, contact us
              today!
            </p>
            <div className="mt-10 max-w-2xl">
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-white">
                      {"We're Creative"}
                    </strong>{" "}
                    Our designs are sure to make your project stand out from the
                    competition
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-white">
                      {"We're Professional"}
                    </strong>{" "}
                    We hold ourselves to a high level to ensure you receive a
                    stress free process
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-white">
                      {"We're Committed"}
                    </strong>{" "}
                    Your goals are our goals! From start to finish, we are
                    devoted to your project
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Trusted by companies across different industries
              </h2>
              <p className="mt-3 text-lg text-black sm:mt-4">
                We approach every project, no matter size, with the same energy
                and attention.
              </p>
            </div>
            <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                  Years of Experience
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  10
                </dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                  Projects Delivered
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  50+
                </dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                  Cups of Coffee
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  15k+
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Services section */}
        <div
          id="services"
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              How can we help you?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-White sm:text-4xl">
              Development services we provide
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Our team brings a wide array of skills that are capable of
              handling your business needs. Check out our services and see how
              we might be able to help.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {services.map((service) => (
                <div key={service.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <service.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-500">
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* FAQs */}
        <div id="FAQ">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl divide-y divide-white/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
                Frequently asked questions
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-white/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <DisclosureButton className="flex w-full items-start justify-between text-left text-white">
                            <span className="text-base font-semibold leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6 text-primary"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6 text-primary"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-300">
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

        {/* Contact Form */}
        <div
          id="contact"
          className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-xl lg:max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Let’s talk about your project
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-500">
              Ready to start a new project? Do you have an idea you would like
              to discuss? Contact us today!
            </p>
            <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <footer className="bg-black">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
            <nav
              className="-mb-6 columns-4 sm:flex sm:justify-center sm:space-x-12"
              aria-label="Footer"
            >
              {navigation.main.map((item) => (
                <div key={item.name} className="pb-6">
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; 2020 nineonenine, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

//contact form
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnvypq");
  if (state.succeeded) {
    return (
      <p className="text-xl text-white">
        Thanks for your submission! A team member will reply shortly.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="lg:flex-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-white"
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ValidationError
              prefix="First Name"
              field="firstName"
              errors={state.errors}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              required
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ValidationError
              prefix="Last Name"
              field="lastName"
              errors={state.errors}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ValidationError
              field="email"
              prefix="Email"
              errors={state.errors}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Website
          </label>
          <div className="mt-2.5">
            <input
              type="url"
              name="website"
              id="website"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ValidationError
              prefix="Website"
              field="website"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          disabled={state.submitting}
          className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Let’s talk
        </button>
        <ValidationError errors={state.errors} />
      </div>
    </form>
  );
}
