import Head from 'next/head'
import Header from '../components/Header'

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
        <div className='container'>
          <button>
            <span className='dibujo'></span>
          </button>
        </div>
      </main>
    </div>
  )
}
