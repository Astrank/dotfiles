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

        <section className='contenedor'>
          <MenuButtonOne />
          <button className={`btn-two ${isOneToggled ? 'toggled' : 'not-toggled'}`} onClick={() => toggleTwo(!isTwoToggled)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </section>
      </main>
    </div>
  )
}
