import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
    const [isNavToggled, toggleNav] = useState(false);
    const router = useRouter();

    return (
        <header
            className="flex justify-between items-center mx-4 my-3 lg:mx-24 lg:my-10 
            font-darker_grotesque lg:text-1xl tracking-wide text-primary-900"
        >
            <Link href="/" className="text-xl">
                Verónica Metélico
            </Link>
            <nav className={`navbar ${isNavToggled ? "open" : ""}`}>
                <ul
                    className="flex flex-col gap-2 px-4 lg:px-0 lg:flex-row lg:gap-6"
                    role="list"
                    aria-label="Navegación Primaria"
                >
                    <a
                        href="#"
                        className={`hover:text-primary-700 ${
                            router.pathname == "/sobre-mi"
                                ? "underline underline-offset-4 decoration-auto"
                                : ""
                        }`}
                    >
                        <li>Sobre mí</li>
                    </a>
                    <Link
                        href="/obra"
                        className={`hover:text-primary-700 ${
                            router.pathname == "/obra"
                                ? "underline underline-offset-4 decoration-auto"
                                : ""
                        }`}
                    >
                        <li>Obra</li>
                    </Link>
                    <Link
                        href="/invitados"
                        className={`hover:text-primary-700 ${
                            router.pathname == "/invitados"
                                ? "underline underline-offset-4 decoration-auto"
                                : ""
                        }`}
                    >
                        <li>Invitados</li>
                    </Link>
                    <a
                        href="#"
                        className={`hover:text-primary-700 ${
                            router.pathname == "/escritura-grupal"
                                ? "underline underline-offset-4 decoration-auto"
                                : ""
                        }`}
                    >
                        <li>Escritura grupal</li>
                    </a>
                    <Link
                        href="/contacto"
                        className={`hover:text-primary-700 ${
                            router.pathname == "/contacto"
                                ? "underline underline-offset-4 decoration-auto"
                                : ""
                        }`}
                    >
                        <li>Contacto</li>
                    </Link>
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
                onClick={() => toggleNav(!isNavToggled)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    );
}
