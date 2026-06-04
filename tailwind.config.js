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
        /* ── Editorial palette ──────────────────────────────────────────
           Hex literals here mirror the CSS custom properties in
           globals.css. Keep the two in sync. Tailwind shades support
           opacity modifiers (e.g. text-ink-900/40); the CSS variables
           cover the functional aliases (var(--brand), var(--text-body)). */

        // Cream — page backgrounds, surfaces, borders
        cream: {
          50: "#FAF7F0",
          100: "#F4EFE3", // page background
          200: "#EBE4D3", // elevated surfaces (cards)
          300: "#DDD4BE", // borders / hairlines
          400: "#C7BB9D", // stronger borders / decorative
        },

        // Ink — headings and body text
        ink: {
          700: "#3A3A37",
          800: "#2A2A28", // body text
          900: "#1A1A1A", // headings
        },

        // Neutral (warm) — secondary / muted / disabled text
        neutral: {
          300: "#B9AE96", // decorative only
          400: "#998F76", // disabled / lightest readable text
          500: "#7A7060", // muted
          600: "#5C5547", // secondary text (captions, metadata)
          700: "#423D33",
        },

        // Gold — the brand
        gold: {
          50: "#FBF7E6",
          100: "#F6EDC0",
          200: "#ECDA8A",
          300: "#E0C654",
          400: "#D6B22A",
          500: "#CDA400", // brand
          600: "#B38F00",
          700: "#997900", // hover (darker = more readable on cream)
          800: "#6B5500",
          900: "#463800",
        },

        // primary = gold (backwards-compatible alias)
        primary: {
          DEFAULT: "#CDA400",
          50: "#FBF7E6",
          100: "#F6EDC0",
          200: "#ECDA8A",
          300: "#E0C654",
          400: "#D6B22A",
          500: "#CDA400",
          600: "#B38F00",
          700: "#997900",
          800: "#6B5500",
          900: "#463800",
        },

        // Teal — editorial counterpoint (links, secondary CTAs, rules)
        teal: {
          50: "#EBF2F1",
          100: "#D2E0DF", // subtle callout / info-card bg
          200: "#A7C5C3",
          300: "#79A6A3",
          400: "#4E827F",
          500: "#2C5F5D", // accent
          600: "#234C4A",
          700: "#1B3938", // hover / readable teal text on cream
          800: "#122625",
          900: "#0A1413",
        },

        // Semantic — kept in their own lane
        success: "#3F7A52",
        warning: "#C2703D", // terracotta-leaning, distinct from gold
        danger: "#B23B3B",
        info: "#2F6E7B",
      },
      fontFamily: {
        // One warm humanist family throughout. `mono` and `serif` are
        // intentionally mapped to Hanken too: existing font-mono labels
        // (eyebrows, buttons, nav) keep their tracked-uppercase treatment
        // but render in the sans — refined, not technical.
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        mono: ["var(--font-hanken)", "system-ui", "sans-serif"],
        serif: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
