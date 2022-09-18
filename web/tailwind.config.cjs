/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        fundoImage: "url('/Fundo.svg')",
        gradientTitle:
          "linear-gradient(89.86deg, #9572FC 33.08%, #43E7AD 53.94%, #E1D55D 24.57%)",
        gradientGame:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);",
      },
      colors: {},
    },
  },
  plugins: [],
};
