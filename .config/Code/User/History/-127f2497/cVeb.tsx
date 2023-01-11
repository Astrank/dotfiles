import Link from "next/link";
import { useAuth } from "../utils/Auth";
import * as Dialog from "@radix-ui/react-dialog";
import Login from "../components/Login";
import { useState } from "react";

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
                        <Dialog.Root open={false}>
                            <Dialog.Trigger>
                                Log in
                            </Dialog.Trigger>
                            <Dialog.Overlay className="overflow-scroll inset-0 fixed bg-black opacity-30" />
                            <Dialog.Content>
                                <Login />
                            </Dialog.Content>
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
