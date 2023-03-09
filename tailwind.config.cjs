/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryBrand: {
          100: "#ecf1f9",
          200: "#c6d6ec",
          300: "#9fbadf",
          400: "#799fd2",
          500: "#5383c6",
          600: "#396aac",
          700: "#2d5286",
          800: "#203b60",
          900: "#132339",
        },
        secondaryBrand: {
          100: "#fce8ea",
          200: "#f6bbc0",
          300: "#f18e95",
          400: "#eb616b",
          500: "#e53341",
          600: "#cc1a27",
          700: "#9e141e",
          800: "#710e16",
          900: "#44090d",
        },
      },
    },
  },
  plugins: [],
};
