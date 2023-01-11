/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
      }
    },
  },
  plugins: [],
}
