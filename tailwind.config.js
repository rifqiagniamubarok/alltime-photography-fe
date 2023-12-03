/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ECE3CE',
        'sage-dark': '#3A4D39',
        sage: '#4F6F52',
        'sage-soft': '#739072',
        beige: '#ECE3CE',
        'beige-sage': '#D0D4CA',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), require('flowbite/plugin')],
};
