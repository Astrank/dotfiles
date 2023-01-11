import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isNavToggled, setIsNavToggled] = useState(false);

    return (
        <header className="primary-header">
            <div className="header-top">
                <div className="contact">
                    <div>
                        
                        <span>0800-555-444</span>
                    </div>
                    <div><span>estudio@castillomilanesi.com</span></div>
                    <div><span>Lun - Vie 8am - 6pm</span></div>
                </div>
                <ul className="social-media">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <button className="consultation">AGENDAR CONSULTA</button>
            </div>
            <div className="header-main">
                <a href="/" className="logo">
                    <Image src="/example2.png" width={170} height={90} alt="logo" />
                </a>
                <nav
                    className={`navbar ${!isNavToggled ? "hidden" : ""}`}
                    id="primary-navigation"
                >
                    <ul aria-label="Primary" role="list" className="nav-list">
                        <li>Contacto</li>
                        <li>Referencias</li>
                        <li>Area de Actuación</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}