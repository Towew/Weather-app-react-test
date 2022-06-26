/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Over: ["Overpass", "sans-serif"],
      },
      colors: {
        weather: "#49B2E9",
      },
    },
  },
  plugins: [],
};
