const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/*.{html,js}",
    "./index.html",
    "./rules.html",
    "./contact.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        accent: '#bfaf48',
      },
      backgroundImage: (theme) => ({
        "hero-bg": "url('/static/images/gym/hero.jpeg')",
        "hero-bg-mobile": "url('/static/images/gym/hero-mobile.jpeg')",
      }),
    },
    screens: {
      xs: "550px",
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: [],
};
