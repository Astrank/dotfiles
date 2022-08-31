import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
