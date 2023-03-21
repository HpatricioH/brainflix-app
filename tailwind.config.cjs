/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['AvenirNext LT Pro', 'roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
