/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxHeight: {
                120: "30rem",
                160: "40rem",
                "1/2": "50%",
                "4/6": "66.6%",
            },
        },
    },
    plugins: [],
};
