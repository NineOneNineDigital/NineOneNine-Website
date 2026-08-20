/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Midnight Studio palette ─────────────────────────────────────
           Hex literals here mirror the CSS custom properties in
           globals.css (the raw ramps). Keep the two in sync. Prefer the
           functional aliases (var(--brand), var(--text-body), …) for new
           component styles; the ramp classes below remain for utilities
           that need a specific shade or an opacity modifier
           (e.g. text-ink-50/70, border-gold-500/30). */

        // Ink — the dark spine of the system.
        // 950 = page background (midnight) … 50 = ivory (primary text).
        ink: {
          50: "#FAFAF7", // ivory — primary text / headings
          100: "#EBEBE8", // body text
          200: "#D5D5D2",
          300: "#B0B0AD", // secondary text
          400: "#8E8E92", // muted text
          500: "#6C6C73", // faint / disabled-ish
          600: "#46464D", // strong borders / disabled text
          700: "#2D2D32", // default borders
          800: "#1F1F23", // elevated surfaces (cards)
          900: "#1A1A1D", // surface
          950: "#0E0E10", // page background — midnight
        },

        // Gold — the brand. On dark backgrounds the readable/hover shades
        // run LIGHTER than the base (gold-400/200), not darker.
        gold: {
          50: "#FCF5D9",
          100: "#F9EDB8",
          200: "#F4E4A1",
          300: "#ECD672",
          400: "#E5C84B", // readable gold on dark / hover
          500: "#CDA400", // brand
          600: "#B38F00",
          700: "#997900",
          800: "#665100",
          900: "#4D3D00", // brand-subtle background
        },

        // primary = gold (backwards-compatible alias)
        primary: {
          DEFAULT: "#CDA400",
          50: "#FCF5D9",
          100: "#F9EDB8",
          200: "#F4E4A1",
          300: "#ECD672",
          400: "#E5C84B",
          500: "#CDA400",
          600: "#B38F00",
          700: "#997900",
          800: "#665100",
          900: "#4D3D00",
        },

        // Semantic — tuned to read on dark backgrounds.
        success: "#6EAB52",
        warning: "#E89643",
        danger: "#D85555",
        info: "#5688C9",
      },
      fontFamily: {
        // Schibsted Grotesk for everything — display, UI, and body. Geist
        // Mono for the tracked uppercase labels and indices. No serif.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
