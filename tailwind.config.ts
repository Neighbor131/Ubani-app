import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

/**
 * Tailwind configuration implementing the Ubani design tokens.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#98CE00",
          foreground: "#1A2600"
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917"
        },
        indigo: {
          100: "#ede9fe",
          400: "#6366f1",
          500: "#4f46e5"
        },
        amber: {
          100: "#fef3c7",
          400: "#f59e0b",
          500: "#d97706"
        },
        rose: {
          100: "#ffe4e6",
          400: "#fb7185",
          500: "#f43f5e"
        },
        teal: {
          100: "#ccfbf1",
          400: "#2dd4bf",
          500: "#14b8a6"
        }
      },
      borderRadius: {
        lg: "16px",
        xl: "20px",
        "2xl": "28px"
      },
      fontFamily: {
        display: ["var(--font-pally)", ...fontFamily.sans],
        sans: ["var(--font-general-sans)", ...fontFamily.sans]
      },
      boxShadow: {
        soft: "0 20px 40px -24px rgba(15, 23, 42, 0.2)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
