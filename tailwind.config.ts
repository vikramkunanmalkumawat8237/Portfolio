import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        void: "#08090A",
        surface: "#0E1110",
        "surface-2": "#141816",
        line: "#1E2422",
        "line-strong": "#2A312D",
        ink: "#F2F4F1",
        "ink-muted": "#8B938E",
        "ink-faint": "#5A625D",
        emerald: {
          DEFAULT: "#B76E79",
          dim: "#3D1F23",
          bright: "#E8A3AD",
          50: "#FDF2F3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(242,244,241,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,244,241,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ticker-blink": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "ticker-blink": "ticker-blink 1.6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
