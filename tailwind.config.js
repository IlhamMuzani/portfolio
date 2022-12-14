/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#06B6D4',
        secondary: '#64748B',
        dark: '#0F172A',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
