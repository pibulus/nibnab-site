import type { Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nibnab: {
          yellow: "#FFEB3B",
          orange: "#f68717",
          pink: "#f60474",
          purple: "#8717f6",
          dark: "#2D2D2D",
        },
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        bubbles: ["Rubik Bubbles", "cursive"],
        bungee: ["Bungee", "display"],
        bowlby: ["Bowlby One", "display"],
        lilita: ["Lilita One", "display"],
        fredoka: ["Fredoka", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bounce: "bounce 2s infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        chunky: "4px 4px 0px 0px rgba(0,0,0,1)",
        "chunky-hover": "6px 6px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
} satisfies Config;