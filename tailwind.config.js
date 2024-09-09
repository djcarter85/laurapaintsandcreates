const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Caveat Brush", ...defaultTheme.fontFamily.sans],
      body: ["Alegreya Sans", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      black: "#000",
      white: "#fff",
      primary: {
        50: "#f5f7fa",
        100: "#eaedf4",
        200: "#d0d9e7",
        300: "#a7b9d2",
        400: "#7894b8",
        500: "#5776a0",
        600: "#3f587d",
        700: "#374c6d",
        800: "#31415b",
        900: "#2d394d",
        950: "#1e2633",
      },
      secondary: {
        50: "#fdf5ef",
        100: "#fbe8d9",
        200: "#f6ceb2",
        300: "#f0af84",
        400: "#e8834f",
        500: "#e3622c",
        600: "#d44b22",
        700: "#b0381e",
        800: "#8d2f1f",
        900: "#72281c",
        950: "#3d120d",
      },
      neutral: {
        50: "#f5f6f6",
        100: "#e4e6e9",
        200: "#cdd1d4",
        300: "#aab1b6",
        400: "#7f8991",
        500: "#646d76",
        600: "#575e66",
        700: "#494e55",
        800: "#414449",
        900: "#393c40",
        950: "#232529",
      },
    },
  },
  plugins: [],
};
