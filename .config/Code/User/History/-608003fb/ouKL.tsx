import "../styles/globals.css";
import { useEffect } from 'react'
import type { AppProps } from "next/app";
import { AuthProvider } from "../utils/Auth";
import { CommentsProvider } from "../utils/Comments";
import Script from "next/script";
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
        gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        router.events.on('hashChangeComplete', handleRouteChange)
        return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
        router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <AuthProvider>
            <CommentsProvider>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `}
                </Script>
                <Component {...pageProps} />
            </CommentsProvider>
        </AuthProvider>
    );
}

export default MyApp;
