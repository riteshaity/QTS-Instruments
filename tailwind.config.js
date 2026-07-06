/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#04909c",
          light: "#3fb5bf",
          dark: "#03676f",
        },
        ink: {
          950: "#071716",
          900: "#0c2422",
          800: "#123331",
          700: "#1a4441",
        },
        cream: {
          DEFAULT: "#F6F3EC",
          dark: "#EAE4D6",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "dot-pattern": "radial-gradient(rgba(7,23,22,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "16px 16px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(7,23,22,0.06), 0 12px 32px -12px rgba(7,23,22,0.12)",
        card: "0 1px 2px rgba(7,23,22,0.04), 0 20px 40px -20px rgba(7,23,22,0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
