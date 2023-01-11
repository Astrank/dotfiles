import Head from "next/head";
import { useState, useEffect } from "react";
import { useAuth } from "../utils/Auth";
import router from "next/router";
import { useFormik } from "formik";

export default function LogIn() {
    const [error, setError] = useState("");
    const { login, user, google } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            login(values.email, values.password)
                .then(() => {
                    router.push("/");
                })
                .catch((error: any) => {
                    setError(error.message);
                });
        },
    });

    /* If user exists redirect to home */
    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user]);

    return (
        <>
            <Head>
                <title>Entrar | Awesome Blog</title>
                <meta
                    name="description"
                    content="Crear cuenta de Awesome blog."
                />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐙</text></svg>"
                />
            </Head>

            <div className="h-full">
                <form onSubmit={formik.handleSubmit} className="flex flex-col text-gray-800 flex items-start w-96 mx-auto my-28">
                    <h1 className="text-4xl font-bold mb-10">
                        Log in to Firebase
                    </h1>
                    {error && (
                        <label htmlFor="" className="text-red-600 py-4">
                            {`⛔ Wrong Email or Password`}
                        </label>
                    )}
                    <button onClick={() => google()}>With Google</button>
                    <div
                        className="flex flex-col gap-4 w-full"
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                {...formik.getFieldProps("email")}
                                id="email"
                                className="border outline-none h-8"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...formik.getFieldProps("password")}
                                className="border outline-none h-8"
                            />
                        </div>
                    </form>

                    <button
                        type="submit"
                        className="bg-purple-500 px-4 py-2 text-md text-white rounded-lg self-end mt-8"
                    >
                        Log in
                    </button>
                </div>
            </div>
        </>
    );
}
