import type { Config } from "tailwindcss";

/**
 * Tailwind config — Aven.ia Smart Host landing
 *
 * Les couleurs principales sont chargées depuis config/brand.ts pour
 * permettre un rebrand instantané (changer brand.ts → toute la landing
 * + emails + composants se mettent à jour). Cf. README.md.
 */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./config/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        // Couleurs sémantiques — les vraies valeurs sont en CSS variables
        // injectées dans app/globals.css depuis config/brand.ts.
        brand: {
          50:  "rgb(var(--brand-50) / <alpha-value>)",
          100: "rgb(var(--brand-100) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
