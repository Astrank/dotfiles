/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        accent: '#AD9263',
        accent_light: '#BAA47C',
        accent_dark: '#91784C',
        accent_darkest: '#4E4129'
      },
      fontFamily: {
        'merriweather': ['Merriweather', ...defaultTheme.fontFamily.serif],
        'poppins':	['Poppins', ...defaultTheme.fontFamily.sans],
        'lora': ['Lora', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
