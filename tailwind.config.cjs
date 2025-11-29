/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#4CAF50',
          blue: '#69C5FF',
          bg: '#F0F9F4',
        }
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
