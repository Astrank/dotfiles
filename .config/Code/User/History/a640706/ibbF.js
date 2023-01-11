import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 text-xl text-center">
            <Link href="/">
                <a className="font-rochester text-4xl">Peel and Stick</a>
            </Link>
            <li>
                <ul></ul>
            </li>
        </footer>
    );
}
