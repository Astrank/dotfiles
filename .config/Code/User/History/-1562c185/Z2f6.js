import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'

import MenuButtonOne from '../components/MenuButtonOne';

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
          <button className={`btn-one ${isOneToggled ? 'toggled' : 'not-toggled'}`} onClick={() => toggleOne(!isOneToggled)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className={`btn-two ${isOneToggled ? 'toggled' : 'not-toggled'}`} onClick={() => toggleTwo(!isTwoToggled)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
      </main>
    </div>
  )
}
