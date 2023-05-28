/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica", "sans-serif"],
      },
      colors: {
        neonBlue: "#08D9D6",
        darkGray: "#36393f",
        lightBlack: "#2d3039",
        lighterBlack: "#393c46",
        lightRed: "#FF2E63",
        offWhite: "#EAEAEA",
        sidebarBlack: "#202225",
      },
    },
  },
  plugins: [require("daisyui")],
};
