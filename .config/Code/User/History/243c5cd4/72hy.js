import Link from 'next/link';

export default function Header() {
    return (
        <header className='my-8 text-center'>
        <Link href="/">
            <a>Peel and Stick</a>
        </Link>
          <h1 className='text-6xl font-rochester tracking-tight'>
            Peel and Stick
          </h1>
          <p className='text-lg mt-8 mx-auto leading-9 max-w-3xl'>Peel and Stick vinyls are a new way to refresh your home. They offer beutiful and durable designs at a low cost and no hassle. <a href='#' className='text-purple-500 hover:underline'>Learn more &rarr;</a></p>
        </header>
    )
}