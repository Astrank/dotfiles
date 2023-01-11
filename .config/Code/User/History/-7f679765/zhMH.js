import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-MHGRB5TFCJ' />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
