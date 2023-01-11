import Link from "next/link";

export default function Header() {
    return (
        <header className="my-8">
            <Link href="/">
                <a className="text-5xl font-rochester tracking-tight">
                    Peel and Stick
                </a>
            </Link>
        </header>
    );
}
