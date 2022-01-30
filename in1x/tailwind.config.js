module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors: {
      'cColor1': '#292929',
      'cColor2': '#01ffd1',
      },
      fontFamily: {
        'press-2-start': ["'Press Start 2P'", "cursive"],
        'Encode-Sans-Condensed': ["'Encode Sans Condensed'", "sans-serif"],
      },
      animation: {
        'expand': 'Gradient 15s ease infinite',
        'cube-1': 'cube 12s ease-in forwards infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
