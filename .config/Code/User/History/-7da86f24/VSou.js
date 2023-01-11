import { useState } from "react"

export default function Header() {
    const [isNavOpen, toggleNav] = useState(false);

    return (
        <header className='header'>
          <a href="/" className='logo'>NF</a>
          <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <ul className=''>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
          <button className="menu" onClick={() => toggleNav(!isNavOpen)}>Menu</button>
        </header>
    )
}