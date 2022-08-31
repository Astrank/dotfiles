import Head from 'next/head'
import Fretaboard from '../components/Fretboard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Visual Fretbord</title>
        <meta name="description" content="Visual Fretbord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fretaboard />
    </div>
  )
}
