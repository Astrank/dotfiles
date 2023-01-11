import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../utils/Auth";
import { FirestoreProvider } from "../utils/Firestore";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <FirestoreProvider>
                <Component {...pageProps} />
            </FirestoreProvider>
        </AuthProvider>
    );
}

export default MyApp;
