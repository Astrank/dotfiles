import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 text-xl text-center flex justify-between items-center">
            <Link href="/">
                <a className="font-rochester text-4xl">Peel and Stick</a>
            </Link>
            <ul className="flex justify-center gap-4 text-sm">
                <li>
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Cookies Policy
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Legal
                    </a>
                </li>
            </ul>
        </footer>
    );
}
