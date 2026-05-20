import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        deep: "var(--deep)",
        dark: "var(--dark)",
        navy: "var(--navy)",
        panel: "var(--panel)",
        "ice-0": "var(--ice-0)",
        "ice-1": "var(--ice-1)",
        "ice-2": "var(--ice-2)",
        "ice-3": "var(--ice-3)",
        "ice-4": "var(--ice-4)",
        glow: "var(--glow)",
        glow2: "var(--glow2)",
        muted: "var(--muted-foreground)",
        dim: "var(--dim)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        title: ["var(--font-title)", "serif"],
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "loader-spin": "loader-spin 3s ease-in-out infinite",
        "fade-up": "fade-up 1.2s var(--ease) forwards",
        "void-shift": "void-shift 15s ease-in-out infinite",
        "ring-pulse": "ring-pulse 8s ease-in-out infinite",
        "float-spin": "float-spin 25s linear infinite",
        "line-expand": "line-expand 1.5s 2s forwards",
        "scroll-pulse": "scroll-pulse 2.5s 3s infinite",
        "bar-shine": "bar-shine 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config
