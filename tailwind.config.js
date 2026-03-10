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
        primary: {
          DEFAULT: "#CDA400",
          50: "#FFF9E5",
          100: "#FFF3CC",
          200: "#FFE799",
          300: "#FFDB66",
          400: "#FFCF33",
          500: "#CDA400",
          600: "#A68400",
          700: "#7F6400",
          800: "#574400",
          900: "#302500",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
