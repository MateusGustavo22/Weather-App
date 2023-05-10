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
      screens: {
        'display1':  {'max': '1188px'},
        // => @media (min-width: 640px) { ... }
  
        'display2': '1128px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        sans: ['Inter, sans-serif', ...fontFamily.sans],
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'ceu-limpo': "url('/fundo_dia_limpo.png')"
      },
      boxShadow: {
        'default': '0px 0px 12px rgba(0, 18, 54, 0.7)'
      },
    },
  },
  plugins: [],
}
