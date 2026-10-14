import type { Config } from "tailwindcss";

// Colours come from CSS variables in app/globals.css (light values on :root, dark values on .dark),
// so every utility such as bg-ink or text-fg follows the theme automatically.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: v("ink"), 2: v("ink-2"), 3: v("ink-3") },
        surface: v("surface"),
        fg: v("fg"),
        mute: v("mute"),
        line: v("line"),
        gold: { DEFAULT: v("gold"), ink: v("gold-ink"), light: v("gold-light"), dark: v("gold-dark") },
        blue: { DEFAULT: v("blue"), ink: v("blue-ink"), deep: v("blue-deep"), light: v("blue-light") },
        teal: "#3ED6B5",
        sky: "#5CB8FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
        deva: ["var(--font-deva)", "sans-serif"],
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        coinspin: { from: { transform: "rotateY(0deg)" }, to: { transform: "rotateY(360deg)" } },
        drift: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(36px,-28px)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        gridmove: { to: { backgroundPosition: "0 64px" } },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(245,176,46,.55)" },
          "100%": { boxShadow: "0 0 0 14px rgba(245,176,46,0)" },
        },
        rise: { from: { opacity: "0", transform: "translateY(18px)" }, to: { opacity: "1", transform: "none" } },
        shine: { to: { backgroundPosition: "-200% center" } },
        twinkle: {
          "0%,100%": { opacity: ".15", transform: "scale(.6)" },
          "50%": { opacity: ".95", transform: "scale(1.2)" },
        },
        sheen: { "0%,60%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
        glowpulse: { "0%,100%": { opacity: ".55" }, "50%": { opacity: "1" } },
        "flow-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(400%)", opacity: "0" },
        },
        "bg-pan": {
          "0%,100%": { transform: "scale(1.04) translate3d(0,0,0)" },
          "50%": { transform: "scale(1.08) translate3d(-1.5%,1%,0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "spin-24": "spin 24s linear infinite",
        "spin-17-rev": "spin 17s linear infinite reverse",
        "spin-80": "spin 80s linear infinite",
        coinspin: "coinspin 12s linear infinite",
        drift: "drift 14s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
        gridmove: "gridmove 3s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        rise: "rise .8s ease backwards",
        shine: "shine 4s linear infinite",
        twinkle: "twinkle 3.4s ease-in-out infinite",
        sheen: "sheen 5s ease-in-out infinite",
        glowpulse: "glowpulse 5s ease-in-out infinite",
        "flow-down": "flow-down 2.6s ease-in-out infinite",
        "bg-pan": "bg-pan 26s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
