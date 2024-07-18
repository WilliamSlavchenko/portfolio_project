/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkmode: 'class',
  theme: {
    extend: {
      colors: {
        'neonic': '#FFFD92',
        'richgray': '#66718D',
      },
      fontFamily: {
        inter: ['inter', 'serif'],
        montserratAlternates: ['"Montserrat Alternates"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}