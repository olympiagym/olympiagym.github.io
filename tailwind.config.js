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
        // brand / semantic colors
        primary: {
          DEFAULT: 'var(--color-primary, #0f172a)',
          contrast: 'var(--color-primary-contrast, #ffffff)'
        },
        secondary: 'var(--color-secondary, #6b7280)',
        accent: 'var(--color-accent, #bfaf48)',
        'accent-600': 'var(--color-accent-600, #9b8b3a)',
        muted: 'var(--color-muted, #f3f4f6)',
        foreground: 'var(--color-foreground, #111827)',
        background: 'var(--color-background, #ffffff)',
        success: 'var(--color-success, #16a34a)',
        danger: 'var(--color-danger, #ef4444)',
        warning: 'var(--color-warning, #f59e0b)',
        info: 'var(--color-info, #0ea5e9)',
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
