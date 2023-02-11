/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        'link-color': '#2F2E41',
        'bot-color': '#707070',
        'color-fot1': '#D2202C',
        'color-fot2': '#323237',
        'color-fot3': '#424146',
        'color-icons': '#F6303F'
      }
    },
  },
  plugins: [],
}
