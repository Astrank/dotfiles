import Link from "next/link";

export default function Header() {
    return (
        <header
            className="flex justify-between items-center m-2 lg:mx-24 lg:my-14 
            font-darker_grotesque lg:text-1xl tracking-wide text-primary-900"
        >
            <Link href="/">Verónica Metélico</Link>
            <nav>
                <ul className="flex gap-2 md:gap-6">
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
        </header>
    );
}
