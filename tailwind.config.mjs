/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primario: "#09A7A3",
        "primario-100": "#E6F7F5",
        secundario: "#FFFFFF",
        titulos: "#244568",
        parrafos: "#111827",
        fondo: "#F0F9FF",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
