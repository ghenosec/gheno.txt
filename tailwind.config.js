/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', "monospace"], // Fonte estilo terminal
      },
      colors: {
        retroGreen: "#00FF00", // Verde estilo terminal
        retroBackground: "#000000", // Fundo preto
      },
    },
  },
  plugins: [],
};
