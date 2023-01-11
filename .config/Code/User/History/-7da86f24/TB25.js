import { useState } from "react"

export default function Header() {
    const [isNavOpen, toggleNav] = useState(false);

    return (
        <header className='header py-6'>
          <a href="/" className='logo font-bold'>NF</a>
          <nav id="navbar" className={`${isNavOpen ? 'open' : ''}`}>
            <ul className=''>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
          <button className="hamburger-menu" onClick={() => toggleNav(!isNavOpen)}>
            <span className={`${isNavOpen ? 'toggled' : ''} bg-black after:bg-black before:bg-black`} aria-hidden="true"></span>
          </button>
        </header>
    )
}