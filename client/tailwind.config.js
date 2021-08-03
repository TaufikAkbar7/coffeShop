const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1220px': '1220px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
      pink: colors.pink,
      primaryColor: '#0C0F14',
      primaryColor60: 'rgba(12, 15, 20, 0.6)',
      secondaryColor: '#fff',
      secondaryColor50: 'rgba(255, 255, 255, 0.5)',
      thirdColor: '#D17842',
      fourColor: '#131820',
      fiveColor: '#171D26',
    },
    fontFamily: {
      roboto: ['Roboto Slab', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
