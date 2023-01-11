/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tonic: "#67d55b",
                supertonic: "#dce772",
                mediant: "#4472e0",
                subdominant: "#bf8bd6",
                dominant: "#de4347",
                submediant: "#34b9b6",
                leading: "#d89d5b",
            },
            minWidth: {
                20: "5rem",
            },
        },
    },
    plugins: [],
};
