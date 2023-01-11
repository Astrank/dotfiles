import "../styles/globals.css";
import TheoryProvider from "../utils/Theory";

function MyApp({ Component, pageProps }) {
    return (
        <TheoryProvider>
            <Component {...pageProps} />
        </TheoryProvider>
    );
}

export default MyApp;
