import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        klyph: {
          black: "#000000",
          obsidian: "#080808",
          dark: "#111111",
          light: "#ffffff",
          offwhite: "#f4f4f6",
          gray: "#888888",
          muted: "#52525b",
          borderDark: "rgba(255, 255, 255, 0.1)",
          borderLight: "rgba(0, 0, 0, 0.08)",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin 18s linear infinite reverse",
        float: "float 7s ease-in-out infinite",
        marquee: "mqanim 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        mqanim: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
