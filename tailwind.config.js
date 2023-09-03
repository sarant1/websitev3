/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    colors: {
      black: "#01081b",
      white: "white",
      blue: "#35b6e0",
      orange: "#bd5f05",
      yellow: "#ffffbd",
      green: "#31ee0b",
      gray: "#999999",
      purple: "#a37cf0",
    },
  },
  plugins: [],
};
