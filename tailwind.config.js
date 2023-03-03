// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellowPrimary' : '#FCD535',
      'lightGray': 'rgba(241,242,243,0.2)',
      'purple': '#BD0CA6',
      'white':'#FFFFFF',
      'lightPurple': 'rgba(189,12,166,0.5)',
      'darkBlue': '#030920',
      'modalBackground' :'#F1F2F31A',
      'blue' : '#060D35',
      'red' : 'red'
    },
  },
  plugins: [],
}
