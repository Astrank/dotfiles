import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isNavToggled, toggleNav] = useState(false);

    return (
        <header
            className="flex justify-between items-center m-2 lg:mx-24 lg:my-14 
            font-darker_grotesque lg:text-1xl tracking-wide text-primary-900"
        >
            <Link href="/">Verónica Metélico</Link>
            <nav>
                <ul className="hidden gap-6 lg:flex">
                    <a href="#">
                        <li>Sobre mí</li>
                    </a>
                    <a href="#">
                        <li>Obra</li>
                    </a>
                    <a href="#">
                        <li>Invitados</li>
                    </a>
                    <a href="#">
                        <li>Escritura grupal</li>
                    </a>
                    <a href="#">
                        <li>Contacto</li>
                    </a>
                </ul>
            </nav>
            <button
                className="hamburger-menu lg:hidden"
                onClick={() => toggleNav(!isNavToggled)}
            >
                <span
                    aria-hidden="true"
                    className={`${
                        isNavToggled ? "clicked" : ""
                    } bg-primary after:bg-primary before:bg-primary`}
                ></span>
            </button>
            <button
                className={`btn_one ${
                    isNavToggled ? "open" : "not_open"
                } lg:hidden`}
                onClick={() => toggleNav(!isNavOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    );
}
