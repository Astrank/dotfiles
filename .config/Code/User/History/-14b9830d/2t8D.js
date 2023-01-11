module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#131516",
                "neutral-200": "#bbb",
                "neutral-600": "#292c2f",
            },
            lineHeight: {
                12: "3rem",
                15: "3.75rem",
            },
            fontFamily: {
                classic: ["sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
