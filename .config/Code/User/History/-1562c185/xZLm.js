import Head from 'next/head'
import Header from '../components/Header'

import MenuButtonOne from '../components/MenuButtonOne';
import MenuButtonTwo from '../components/MenuButtonTwo';

export default function Home() {
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
          <MenuButtonTwo />
        </section>
      </main>
    </div>
  )
}
