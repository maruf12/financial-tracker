module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  variants: {
    extends: {
      backgroundColor: ['active'],
      fontSize: ['hover'],
    },
  },
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          dark: "#0c87b8",
          DEFAULT: "#0fa9e6"
        }
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}
