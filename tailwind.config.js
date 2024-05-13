/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    colors: {
      primary: "#38B6C2",
      white: "#ffffff",
    },
    fontFamily: {
      "roboto-thin": ["Roboto-Thin", "sans-serif"],
      "roboto-light": ["Roboto-Light", "sans-serif"],
      "roboto-regular": ["Roboto-Regular", "sans-serif"],
      "roboto-medium": ["Roboto-Medium", "sans-serif"],
      "roboto-bold": ["Roboto-Bold", "sans-serif"],
      "roboto-black": ["Roboto-Black", "sans-serif"],
    },
  },
  plugins: [],
};
