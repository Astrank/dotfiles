import Head from 'next/head'
import { useState, useEffect } from "react";
import { useAuth } from "../utils/Auth";
import router from "next/router";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signup, user } = useAuth();

    const signUpSchema = Yup.object().shape({
        displayName: Yup.string()
            .required("Introduce un nombre de usuario.")
            .min(2, "El nombre debe tener entre 2 y 50 caracteres.")
            .max(50, "El nombre debe tener entre 2 y 50 caracteres."),
        email: Yup.string()
            .required("Introduce un email.")
            .email("El email ingresado no es valido."),
        password: Yup.string()
            .required("Introduce una contraseña.")
            .min(8, "La contraseña debe tener entre 8 y 50 caracteres.")
            .max(50, "La contraseña debe tener entre 8 y 50 caracteres."),
        repeatPassword: Yup.string()
            .required("Vuelve a introducir tu contraseña.")
            .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales.")
    });

    const formik = useFormik({
        initialValues: {
            displayName: '',
            email: '',
            password: '',
            repeatPassword: ''
        },
        validationSchema: { signUpSchema },
        onSubmit: values => {
            signup(values.email, values.password)
                .then(() => {
                    router.push("/");
                })
                .catch((error: any) => {
                    setError(error.message);
                });
        },
    })

    const signUp = () => {
        signup(email, password)
            .then(() => {
                router.push("/");
            })
            .catch((error: any) => {
                setError(error.message);
            });
    };

    /* If user exists redirect to home */
    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user]);

    return (
        <>
            <Head>
            <title>Crear cuenta | Awesome Blog</title>
            <meta name="description" content="Awesome blog." />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐙</text></svg>" />
            </Head>

            <div className="h-full">
                <div className="flex flex-col text-gray-800 flex items-start w-96 mx-auto my-28">
                    <h1 className="text-4xl font-bold mb-10">
                        Crear cuenta
                    </h1>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="display-name">Display Name</label>
                            <input
                                type="text"
                                aria-label="Display name"
                                name="display-name"
                                id="email"
                                className="border outline-none h-8"
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                aria-label="Email"
                                name="email"
                                id="email"
                                className="border outline-none h-8"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="">
                                Password
                            </label>
                            <input
                                type="password"
                                aria-label="Password"
                                name="password"
                                id="password"
                                className="border outline-none h-8"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {error && (
                        <label htmlFor="" className="text-red-600 py-4">
                            {`⛔ ${error}`}
                        </label>
                    )}
                    <button
                        disabled={email === "" || password === ""}
                        className="bg-purple-500 px-4 py-2 text-md text-white rounded-lg self-end mt-10"
                        onClick={() => {
                            signUp();
                        }}
                    >
                        Sign up
                    </button>
                </div>
                    
                <div className="flex flex-col text-gray-800 flex items-start w-96 mx-auto my-28">
                    <form onSubmit={formik.handleSubmit}>
                        <h1 className="text-4xl font-bold mb-10">
                            Crear una cuenta
                        </h1>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="displayName">Nombre de usuario</label>
                                <input 
                                    className={`border outline-none h-8 ${formik.errors.displayName ? 'border-red-500' : ''}`} 
                                    onChange={formik.handleChange}
                                    type="text" 
                                    name="displayName" 
                                    value={formik.values.displayName}
                                    aria-label="Nombre de Usuario" />
                                {formik.errors.displayName &&
                                    <span className="text-red-500" aria-label="Display name field errors">{formik.errors.displayName}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input 
                                    className={`border outline-none h-8 ${formik.errors.email ? 'border-red-500' : ''}`} 
                                    onChange={formik.handleChange}
                                    type="email" 
                                    name="email" 
                                    value={formik.values.email}
                                    aria-label="Email" />
                                {formik.errors.email &&
                                    <span className="text-red-500" aria-label="Email field errors">{formik.errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="">Contraseña</label>
                                <input 
                                    className={`border outline-none h-8 ${formik.errors.password ? 'border-red-500' : ''}`} 
                                    onChange={formik.handleChange}
                                    type="password" 
                                    name="password" 
                                    value={formik.values.password}
                                    aria-label="Contraseña" />
                                {formik.errors.password &&
                                    <span className="text-red-500" aria-label="Password field errors">{formik.errors.password}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="repeatPassword" className="">Repetir Contraseña</label>
                                <input 
                                    className={`border outline-none h-8 ${formik.errors.repeatPassword ? 'border-red-500' : ''}`} 
                                    onChange={formik.handleChange}
                                    type="password" 
                                    name="repeatPassword" 
                                    value={formik.values.repeatPassword}
                                    aria-label="Repetir Contraseña" />
                                {formik.errors.email &&
                                    <span className="text-red-500" aria-label="Repeat password field errors">{formik.errors.repeatPassword}</span>}
                            </div>
                        </div>
                        {error && (
                            <label htmlFor="" className="text-red-600 py-4">
                                {`⛔ ${error}`}
                            </label>
                        )}
                        <button
                            type="submit"
                            disabled={email === "" || password === ""}
                            className="bg-purple-500 px-4 py-2 text-md text-white rounded-lg self-end mt-10"
                            onClick={() => {
                                signUp();
                            }}
                        >
                            Registrarme
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
