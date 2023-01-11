import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../utils/Auth";
import { CommentsProvider } from "../utils/Comments";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <CommentsProvider>
                <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
//this defaults to denying
    gtag('consent', 'default', {
      'analytics_storage': 'denied'
    });
          gtag('js', new Date());
//check for consent, you'll need to write your own function here, but you get the idea
if(consentGranted){
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });

          `
            }}
          />
                <Component {...pageProps} />
            </CommentsProvider>
        </AuthProvider>
    );
}

export default MyApp;
