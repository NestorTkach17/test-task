import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ["var(--font-graphik)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-orange": "#FF6A00",
        "light-gray": "#CDC5C0",
        "light-blue": "#82A3AC",
      },
    },
  },
  plugins: [],
} satisfies Config;
