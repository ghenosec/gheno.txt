/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', "monospace"], 
      },
      colors: {
        retroGreen: "#00FF00", 
        retroBackground: "#000000", 
      },
    },
  },
  plugins: [],
};
