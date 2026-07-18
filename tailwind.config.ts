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
        void: "#FBF1EC",
        surface: "#F6E4DD",
        "surface-2": "#F0D9CF",
        line: "#E0C0B2",
        "line-strong": "#C99C89",
        ink: "#1F3A5F",
        "ink-muted": "#4A6483",
        "ink-faint": "#7C8FA6",
        emerald: {
          DEFAULT: "#B76E79",
          dim: "#F0D9CF",
          bright: "#C98793",
          50: "#FBEDE9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(31,58,95,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,58,95,0.05) 1px, transparent 1px)",
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
