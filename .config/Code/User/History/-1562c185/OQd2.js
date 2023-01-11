import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'

export default function Home() {
  const [isButtonToggled, toggleButton] = useState(false);

  return (
    <div>
      <Head>
        <title>NF</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Header />
        <div className='contenedor'>
          <button className={`${isButtonToggled ? 'toggled' : 'not-toggled'}`} onClick={() => toggleButton(!isButtonToggled)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </main>
    </div>
  )
}
