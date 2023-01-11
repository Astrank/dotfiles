import Head from 'next/head'
import Fretaboard from '../components/Fretboard'
import Metronome from '../components/Metronome'

export default function Home() {
  return (
    <div className='text-neutral-800'>
      <Head>
        <title>Visual Fretbord</title>
        <meta name="description" content="Visual Fretbord" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎸</text></svg>" />
      </Head>

      <header>
        <h1 className="font-bold text-3xl text-center my-10">Visual Fretboard</h1>
      </header>

      <Fretaboard />

      <Metronome />
    </div>
  )
}
