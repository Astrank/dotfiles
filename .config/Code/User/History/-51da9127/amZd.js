/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            minWidth: {
                20: "5rem",
            },
            colors: {
                tonic: "#67d55b",
                supertonic: "#dce772",
                mediant: "",
                subdominant: "",
                dominant: "",
                submediant: "",
                leading: "",
            },
        },
    },
    plugins: [],
};
