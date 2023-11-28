/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Tenor Sans', 'sans-serif'],
      },
      colors: {
        primary: '#ECE3CE',
        'sage-dark': '#3A4D39',
        sage: '#4F6F52',
        'sage-soft': '#739072',
        beige: '#ECE3CE',
        'beige-sage': '#D0D4CA',
      },
      darkMode: 'class',
    },
  },
  plugins: [require('flowbite/plugin'), nextui()],
};
