/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors:{
        'bluecolor':'#2a68ff',
        'greyIsh':'#f1f2f8',
        'cardshadow':'#f7f8f9',
        'textcolor':'#252b36',
      }
    },
  },
  plugins: [],
}

