/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
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
        'sage-dark': '#3A4D39',
        sage: '#4F6F52',
        'sage-soft': '#739072',
        beige: '#ECE3CE',
        'beige-sage': '#D0D4CA',
      },
    },
  },
  plugins: [],
};
