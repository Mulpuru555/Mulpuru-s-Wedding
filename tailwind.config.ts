import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: "#130207",
          900: "#1f040d",
          850: "#290612",
          800: "#38091a",
          700: "#4e0d24",
          600: "#691232",
          500: "#861841",
        },
        gold: {
          100: "#faf4dc",
          200: "#f4e7b4",
          300: "#edd585",
          400: "#dfbe52",
          500: "#cda62f",
          600: "#aa841f",
          700: "#856417",
          800: "#604713",
        },
        champagne: {
          50: "#fdfbf7",
          100: "#f9f4ea",
          200: "#f1e5cf",
          300: "#e6d2ad",
          400: "#d9bc87",
        },
        ivory: {
          DEFAULT: "#fffdf9",
          50: "#ffffff",
          100: "#fcfaf4",
          200: "#f7f2e5",
          300: "#efe6d1",
          muted: "#ded3be",
        },
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        cinzel: ["'Cinzel'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        script: ["'Alex Brush'", "cursive"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f7e7b4 0%, #d4af37 40%, #aa841f 75%, #e6cb78 100%)",
        "gold-shimmer": "linear-gradient(90deg, rgba(212,175,55,0.1) 0%, rgba(247,231,180,0.6) 50%, rgba(212,175,55,0.1) 100%)",
        "radial-burgundy": "radial-gradient(circle at 50% 30%, #3a091b 0%, #1c030c 60%, #100207 100%)",
        "radial-burgundy-light": "radial-gradient(circle at 50% 50%, #460d23 0%, #240510 70%, #150208 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px -4px rgba(212, 175, 55, 0.35)",
        "gold-glow-lg": "0 0 45px -5px rgba(212, 175, 55, 0.45)",
        "card-luxury": "0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 175, 55, 0.18)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
