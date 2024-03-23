/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet1: "#6E07F3",
        grey1: "#E0E1E3",
        lightgrey: "#c1c1ca",
        lightgrey1: "rgba(0, 0, 0, 0.342)",
      },
      fontFamily: {
        k2d: "K2D",
      },
      screens: {
        "md-1": "850px",
      },
    },
  },
  plugins: [],
};
