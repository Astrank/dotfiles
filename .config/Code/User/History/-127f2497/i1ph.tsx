import Link from "next/link";
import { useAuth } from "../utils/Auth";
import Login from "../components/Login";
import Dialoga from "../components/Dialog"
import { Dialog } from '@headlessui/react'

export default function Header() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="px-16 py-4 flex items-center justify-between text-md shadow-sm">
            <Link href="/">
                <a className="text-lg font-bold">🐙 Awesome Blog</a>
            </Link>
            {user && (
                <div>
                    <button onClick={() => logout()}>Log out</button>
                </div>
            )}
            {!user && (
                <div className="flex gap-4">
                    <button>Log in</button>
                    
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                        
                        <div className="fixed inset-0 flex items-center justify-center p-4">
                            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-14 rounded-2xl">
                                <Dialoga />
                            </Dialog.Panel>
                        </div>
                    </Dialog>
                    
                    <Link href="/signup">
                        <a>Sign up</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
