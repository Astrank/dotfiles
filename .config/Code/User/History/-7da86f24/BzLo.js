export default function Header() {
    return (
        <header className='flex justify-between items-center py-10'>
          <a href="/" className='text-3xl font-bold'>Elementos Digitales</a>
          <nav>
            <ul className='flex gap-6 font-bold'>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>
    )
}