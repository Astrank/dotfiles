import Head from 'next/head'
import Fretaboard from '../components/Fretboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Visual Fretbord</title>
        <meta name="description" content="Visual Fretbord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="font-bold text-3xl text-center my-10">Visual Fretboard</h1>
      </header>

      <Fretaboard />
    </>
  )
}
