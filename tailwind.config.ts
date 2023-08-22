import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#fffffe",
        backgroundPrimary: "#F2ECFF",
        headline: "#2b2c34",
        paragraph: "#2b2c34",
        button: "#6246ea",
        primary: "#6246ea",
        secondary: "#d1d1e9",
        tertiary: "#e45858",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "du-",
    logs: true,
    themes: [
      {
        murakali: {
          primary: "#6246ea",
          "primary-content": "#ffffff",
          secondary: "#d1d1e9",
          "secondary-content": "#ffffff",
          accent: "#FACC15",
          "accent-focus": "#EEC10C",
          neutral: "#3D4451",
          "neutral-focus": "#303640",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F2F2F2",
          "base-300": "#E6E6E6",
          "base-content": "#303640",
          info: "#3b82f6",
          success: "#4ade80",
          warning: "#fde047",
          error: "#ef4444",

          "--rounded-box": "0.375rem",
          "--rounded-btn": "0.375rem",
          "--rounded-badge": "2rem",
          "--animation-btn": "0",
          "--animation-input": "0.2s",
          "--btn-text-case": "",
          "--btn-focus-scale": "1",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};
export default config;
