import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "primary": "#3B82F6",
        "primary-dark": "#2563EB",
        "gray": "#364152",
        "border-gray": "#CDD5DF",
        "gray-dark": "#F8FAFC",
      }
    },
  },
  plugins: [],
};
export default config;
