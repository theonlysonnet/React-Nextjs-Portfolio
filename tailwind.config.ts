import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hermes_orange: "#f37021",
        odd_grey: "#bfbfbf",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans font
      },
    },
  },
  plugins: [],
} satisfies Config;
