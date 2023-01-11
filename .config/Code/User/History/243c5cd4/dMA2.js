import Link from 'next/link';

export default function Header() {
    return (
        <header className='my-8 text-center'>
            <Link href="/">
                <a className='text-6xl font-rochester tracking-tight'>Peel and Stick</a>
            </Link>
        </header>
    )
}