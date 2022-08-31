import Head from 'next/head'
import Fretaboard from '../components/Fretboard'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Visual Fretbord</title>
        <meta name="description" content="Visual Fretbord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="logo">Visual Fretboard</h1>
      </header>

      <Fretaboard />
    </div>
  )
}
