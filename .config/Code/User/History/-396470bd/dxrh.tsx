import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../utils/Auth";

const MyDialog = () => {
    let [isOpen, setIsOpen] = useState(true)
    const { login, user, google } = useAuth();
    const [error, setError] = useState("");

    const logInSchema = Yup.object().shape({
        email: Yup.string()
            .required("Introduce tu email."),
        password: Yup.string()
            .required("Introduce tu contraseña.")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: logInSchema,
        onSubmit: (values) => {
            login(values.email, values.password)
                .then(() => {
                    //router.push("/");
                })
                .catch((error: any) => {
                    setError(error.message);
                });
        },
    });

  return (
    <>
        <button onClick={() => setIsOpen(true)}>Open</button>
        <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
        >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center px-20">
                    <h1 className="text-4xl font-bold mb-10">
                        Log in to Firebase
                    </h1>
                    {error && 
                        <label htmlFor="" className="text-red-600 py-4">
                            {`Wrong Email or Password`}
                        </label>
                    }
                    <button className="font-bold self-start" onClick={() => google()}>With Google</button>
                    <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="font-bold">Email</label>
                            <input
                                type="text"
                                {...formik.getFieldProps("email")}
                                id="email"
                                className="border outline-none h-8 rounded"
                            />
                            {formik.errors.email && formik.touched.email &&
                                <span className="text-red-500 text-sm" aria-label="Email field errors">{formik.errors.email}</span>}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="password" className="font-bold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...formik.getFieldProps("password")}
                                className="border outline-none h-8 rounded"
                            />
                            {formik.errors.password && formik.touched.password &&
                                <span className="text-red-500 text-sm" aria-label="Password field errors">{formik.errors.password}</span>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-500 px-6 py-3 mt-8 text-md text-white rounded-lg self-start"
                    >
                        Log in
                    </button>
                </form>
            </Dialog.Panel>
        </div>
        </Dialog>
    </>
  )
}

export default MyDialog;