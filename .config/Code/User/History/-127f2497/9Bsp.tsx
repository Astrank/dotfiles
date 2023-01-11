import Link from "next/link";
import { useAuth } from "../utils/Auth";
import * as Dialog from "@radix-ui/react-dialog";
import Login from "../components/Login";
import Dialoga from "../components/Dialog"

export default function Header() {
    const { user, logout } = useAuth();

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
                    <div>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                Log in
                            </Dialog.Trigger>
                            <Dialog.Overlay className="overflow-scroll inset-0 fixed bg-black opacity-30" />
                            <Dialog.Close className="w-full fixed inset-0 flex items-center justify-center p-4">
                                <Dialog.Content className="mx-auto rounded-2xl bg-white p-16">
                                        <Dialoga />
                                </Dialog.Content>
                            </Dialog.Close>
                        </Dialog.Root>
                    </div>
                    <Link href="/signup">
                        <a>Sign up</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
