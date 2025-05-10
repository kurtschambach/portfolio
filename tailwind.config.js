const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],

  theme: {
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
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
        plex: ["IBM Plex", defaultTheme.fontFamily.mono],
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
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        subtext: "var(--color-subtext)",
        bg: "var(--color-base)",
        mantle: "var(--color-mantle)",
        crust: "var(--color-crust)",
        mauve: "var(--color-mauve)",
        blue: "var(--color-blue)",
        teal: "var(--color-teal)",
        green: "var(--color-green)",
        yellow: "var(--color-yellow)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tailwindcss-debug-screens"),
  ],
};
