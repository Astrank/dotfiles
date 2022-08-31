import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isNavToggled, setIsNavToggled] = useState(false);

    return (
        <header className="primary-header">
                <a href="/" className="logo">
                    <Image src="/example2.png" width={170} height={90} alt="logo" />
                </a>
                <button
                    className={`mobile-nav-toggle`}
                    onClick={() => setIsNavToggled(!isNavToggled)}
                    aria-controls="primary-navigation"
                    aria-expanded={isNavToggled}
                >
                    <img
                        className="icon-hamburguer"
                        src="assets/svg/hamburguer.svg"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="icon-close"
                        src="assets/svg/x.svg"
                        alt=""
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Menu</span>
                </button>
                <nav
                    className={`navbar ${!isNavToggled ? "hidden" : ""}`}
                    id="primary-navigation"
                >
                    <ul aria-label="Primary" role="list" className="nav-list">
                        <li>Contacto</li>
                        <li>Referencias</li>
                        <li>Area de Actuación</li>
                        <li><img src="assets/svg/sun.svg" alt="" /></li>
                    </ul>
                </nav>
            </header>
    )
}