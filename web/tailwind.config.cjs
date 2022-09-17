/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        fundoImage: "url('/Fundo.svg')",
      },
    },
  },
  plugins: [],
};
