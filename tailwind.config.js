/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./(public)/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'mono']
      },
    },
  },
  plugins: [],
}
