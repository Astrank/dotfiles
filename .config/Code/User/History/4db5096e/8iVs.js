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
        accent_darkest: '#b58544',
        darkest: '#222222',
        dark_border: '#0a0c0d',
        custom_gray: '#444',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'poppins':	['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'lora': ['Lora', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      },
      keyframes: {
        fade_in: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        slide_in_up: {
          '0%': {
            transform: 'translate3d(0, 100%, 0)',
            visibility: 'visible'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)'
          }
        }
      },
      animation: {
        fade_in: 'fade_in 1s',
        slide_in_up: 'slide_in_up 5s'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
