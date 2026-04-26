const defaultTheme = require("tailwindcss/defaultTheme");

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
        // brand / semantic colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          contrast: 'var(--color-primary-contrast)'
        },
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        accent: 'var(--color-accent)',
        'secondary-accent': 'var(--color-secondary-accent)',
        'accent-600': 'var(--color-accent-600)',
        muted: 'var(--color-muted)',
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
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
