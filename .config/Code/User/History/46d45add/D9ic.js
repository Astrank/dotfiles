/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // or 'media' or 'class'
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            minWidth: {
                60: "15rem",
            },
            maxWidth: {
                "2xs": "19rem",
            },
        },
    },
    plugins: [],
};
