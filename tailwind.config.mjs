import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./style/**/*.{css,scss}",
  "./mdx-components.tsx",
  "content/**/*.mdx",
];
export const theme = {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          "code::before": {
            content: '""',
          },
          "code::after": {
            content: '""',
          },
        },
      },
      quoteless: {
        css: {
          "blockquote p:first-of-type::before": { content: "none" },
          "blockquote p:first-of-type::after": { content: "none" },
        },
      },
    },
    transitionProperty: {
      width: "width",
    },
    fontFamily: {
      sans: ["var(--font-inter)", ..._fontFamily.sans],
      display: ["var(--font-calsans)"],
      plex: ["IBM Plex", _fontFamily.mono],
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(50% 50% at 50% 50%, 20)",
    },
    animation: {
      "fade-left": "fade-left 3s ease-in-out forwards",
    },
    keyframes: {
      "fade-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
      },
    },
    colors: {
      accent: "#fab387",
      text: "var(--color-text)",
      subtext: "var(--color-subtext)",
      base: "var(--color-base)",
      mantle: "var(--color-mantle)",
      crust: "#11111b",
      mauve: "#cba6f7",
      blue: "#89b4fa",
      teal: "#94e2d5",
      green: "#a6e3a1",
      yellow: "#f9e2af",
      error: "#f38ba8",
      warning: "#fab387",
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  require("tailwind-scrollbar"),
  require("tailwindcss-debug-screens"),
];
