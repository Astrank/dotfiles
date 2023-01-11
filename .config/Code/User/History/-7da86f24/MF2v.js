export default function Header() {
    return (
        <header className='header'>
          <a href="/" className='logo'>NF</a>
          <nav className="navbar">
            <ul className=''>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>
    )
}