/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                asap: ["Asap", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
                darker-grotesque: ["Asap", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
