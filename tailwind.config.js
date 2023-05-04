/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'line': '#D6D6D6',
        'color2': '#EFECEC'
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'ceu-limpo': "url('/fundo_dia_limpo.png')"
      },
    },
  },
  plugins: [],
}
