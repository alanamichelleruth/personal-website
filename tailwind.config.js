const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or false or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        galada: ['Galada']
      },
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      offwhite: {
        DEFAULT: '#f8f8ff'
      }
    },
  },
  variants: {
    extend: {
      textColor: ['visited', 'hover'],
      ringColor: ['hover'],
      borderColor: ['hover'],
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}
