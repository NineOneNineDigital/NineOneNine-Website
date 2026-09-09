// Provider-neutral events. No scripts, cookies, or network requests are created
// here. Connect a consent-aware analytics provider before expecting reports.
const EVENTS = new Set(["contact_click", "form_start", "generate_lead"]);

export function trackEvent(event, source) {
  if (typeof window === "undefined" || !EVENTS.has(event)) {
    return;
  }
  const detail = {
    event,
    page_path: window.location.pathname,
    source,
  };
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(detail);
    window.dispatchEvent(
      new CustomEvent("nineonenine:measurement", { detail })
    );
  } catch {
    // A third-party measurement adapter must never interrupt an inquiry.
  }
}
