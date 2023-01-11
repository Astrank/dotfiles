import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-DY203Z66PJ' />
      <Script strategy='afterInteractive' id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DY203Z66PJ');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
