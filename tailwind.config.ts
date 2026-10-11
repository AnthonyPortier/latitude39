import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pierre: {
          50: "#f7f5f2",
          100: "#ebe6de",
          200: "#d6cfc0",
          300: "#bdb29c",
          400: "#a3947a",
          500: "#8f7f66",
          600: "#766855",
          700: "#5f5446",
          800: "#4f463c",
          900: "#443c35",
        },
        olivier: {
          50: "#f3f7f0",
          100: "#e3ecdc",
          200: "#c8d9bb",
          300: "#a3bf91",
          400: "#7fa26b",
          500: "#60864e",
          600: "#4a6a3c",
          700: "#3b5431",
          800: "#31442a",
          900: "#2a3925",
        },
        verdon: {
          50: "#eef9f8",
          100: "#d5f0ef",
          200: "#afe2e1",
          300: "#7ecccc",
          400: "#4aadb0",
          500: "#2f9195",
          600: "#257479",
          700: "#225d62",
          800: "#204c50",
          900: "#1e4043",
        },
        soleil: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#f5b814",
          500: "#e09a08",
          600: "#c07504",
          700: "#995607",
          800: "#7e440c",
          900: "#6b3810",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "provence-mesh":
          "radial-gradient(ellipse 80% 60% at 10% 20%, rgba(47,145,149,0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 10%, rgba(245,184,20,0.16), transparent 50%), radial-gradient(ellipse 60% 50% at 70% 90%, rgba(96,134,78,0.14), transparent 55%), linear-gradient(165deg, #f7f5f2 0%, #eef5f4 45%, #ebe6de 100%)",
        "hero-wash":
          "linear-gradient(120deg, rgba(32,76,80,0.92) 0%, rgba(59,84,49,0.78) 48%, rgba(79,70,60,0.88) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
