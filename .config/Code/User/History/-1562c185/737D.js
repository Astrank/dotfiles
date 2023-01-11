import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'

export default function Home() {
  const [isOneToggled, toggleOne] = useState(false);
  const [isTwoToggled, toggleTwo] = useState(false);

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
          <button className={`${isOneToggled ? 'toggled' : 'not-toggled'}`} onClick={() => toggleOne(!isOneToggled)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="hamburger-menu" onClick={() => toggleNav(!isNavOpen)}>
            <span className={`${isNavOpen ? 'toggled' : ''} bg-black after:bg-black before:bg-black`} aria-hidden="true"></span>
          </button>
        </div>
      </main>
    </div>
  )
}
