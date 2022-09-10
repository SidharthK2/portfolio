/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        lightBlack: "#222831",
        lightRed: "#FF2E63",
        offWhite: "#EAEAEA",
      },
    },
  },
  plugins: [],
};
