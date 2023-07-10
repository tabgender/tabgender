/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './(public)/**/newtab.html',
    './(public)/**/index.html',
    './(public)/**/privacy.html',
    './(public)/**/terms.html',
    './(public)/**/test.html',
    './(public)/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter':['Inter','mono']
      },
    },
  },
  plugins: [],
}
