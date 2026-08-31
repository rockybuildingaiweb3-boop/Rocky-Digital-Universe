import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-core)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        border: "var(--border-subtle)",
        accent: {
          cyan: "var(--accent-cyan)",
          purple: "var(--accent-purple)",
          green: "var(--accent-green)",
          amber: "var(--accent-amber)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "PingFang SC", "Microsoft YaHei", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
