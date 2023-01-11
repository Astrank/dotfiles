import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 text-xl text-center flex justify-between items-center">
            <Link href="/">
                <a className="font-rochester text-4xl">Peel and Stick</a>
            </Link>
            <ul className="flex justify-center gap-4 text-sm">
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Cookies Policy</a>
                </li>
                <li>
                    <a href="#">Legal</a>
                </li>
            </ul>
        </footer>
    );
}
