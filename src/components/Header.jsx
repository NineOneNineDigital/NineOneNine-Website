"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { navigation } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-[color:var(--rule)] border-b bg-ink-950/80 backdrop-blur-md"
          : "border-transparent border-b"
      }`}
    >
      <div className="shell flex items-center justify-between py-5 lg:py-6">
        <a
          aria-label="NineOneNine — home"
          className="flex items-baseline gap-3"
          href="/"
        >
          <Wordmark className="text-xl lg:text-2xl" />
          <span className="label hidden text-ink-500 lg:block">
            Development
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {navigation.map((item, i) => (
            <a
              className="group flex items-baseline gap-1.5 text-ink-300 text-sm transition-colors duration-300 hover:text-ink-50"
              href={item.href}
              key={item.name}
            >
              <span className="font-mono text-[10px] text-ink-600 transition-colors duration-300 group-hover:text-gold-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
          <a
            className="group flex items-center gap-2 border-gold-500/50 border-b pb-0.5 text-ink-50 text-sm transition-colors duration-300 hover:border-gold-400"
            href="/#contact"
          >
            <span>Discuss your project</span>
            <span
              aria-hidden="true"
              className="text-gold-400 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </nav>

        <button
          className="label text-ink-200 transition-colors duration-200 hover:text-gold-400 md:hidden"
          onClick={openMenu}
          type="button"
        >
          Menu
        </button>
      </div>

      <Dialog className="md:hidden" onClose={setOpen} open={open}>
        <div className="fixed inset-0 z-50 bg-ink-950/70 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-0 z-50 flex flex-col bg-ink-950">
          <div className="shell flex items-center justify-between py-5">
            <Wordmark className="text-xl" />
            <button
              className="label text-ink-200 transition-colors duration-200 hover:text-gold-400"
              onClick={closeMenu}
              type="button"
            >
              Close
            </button>
          </div>

          <nav className="shell flex flex-1 flex-col justify-center">
            {navigation.map((item, i) => (
              <a
                className="rule-b flex items-baseline gap-4 py-5 text-ink-50"
                href={item.href}
                key={item.name}
                onClick={closeMenu}
              >
                <span className="font-mono text-[10px] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display-md">{item.name}</span>
              </a>
            ))}
          </nav>

          <div className="shell pb-10">
            <Link
              className="flex items-center justify-between border border-gold-500/40 px-5 py-4 text-gold-400 text-sm"
              href="/#contact"
              onClick={closeMenu}
            >
              <span>Discuss your project</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
