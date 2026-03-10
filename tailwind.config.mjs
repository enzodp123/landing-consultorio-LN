/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#254669",
        secondary: "#244568",
        accent: "#374151",
        title: "#111827",
        text: "#4B5563",
        "text-secondary": "#09A7A3",
        bg: "#F0F9FF",
        "bg-light": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
