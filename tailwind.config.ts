import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        42: '168px',
        43: '172px',
        45: '180px',
        51: '204px',
        63: '252px',
        66: '264px',
        70: '280px',
        73: '292px',
        81: '324px',
        84: '336px',
        86: '344px',
        88: '352px',
        90: '360px',
        92: '368px',
        480: '480px',
        570: '570px',
        1300: '1300px',
        1600: '1600px',
      },
      screens: {
        custom: '1060px',
      },
      backgroundImage: {
        "map": "url('/public/placeholder.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
