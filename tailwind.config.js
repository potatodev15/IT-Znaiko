/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueVap: "#003D7D"
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}
