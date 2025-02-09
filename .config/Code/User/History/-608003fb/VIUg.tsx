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
                {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
                <Component {...pageProps} />
            </CommentsProvider>
        </AuthProvider>
    );
}

export default MyApp;
