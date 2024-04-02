/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "577px",
      md: "769px",
      lg: "993px",
      xl: "1201px",
      "2xl": "1400px",
      xs: "308px",
    },
  },
  plugins: [],
};
