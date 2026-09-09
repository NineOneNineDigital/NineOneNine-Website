"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/measurement";

export default function SiteMeasurement() {
  useEffect(() => {
    const onClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }
      const link = event.target.closest(
        'a[href="/#contact"], a[href="#contact"]'
      );
      if (!link) {
        return;
      }
      const section = link.closest("section");
      let source = section?.id || "page";
      if (link.closest("header")) {
        source = "header";
      } else if (link.closest("footer")) {
        source = "footer";
      }
      trackEvent("contact_click", source);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
