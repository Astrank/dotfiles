import { useState, useEffect } from "react";
import { useAuth } from "../utils/Auth";
import router from "next/router";
import { useFormik } from "formik";

export default function LogIn() {
  const [error, setError] = useState("");
  const { login, user, google } = useAuth();

  const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            login(email, password)
              .then(() => {
                router.push("/");
              })
              .catch((error: any) => {
                setError(error.message);
              });
        },
    })

  const logIn = () => {
    login(email, password)
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
    <div className="h-full">
      <div className="flex flex-col text-gray-800 flex items-start w-96 mx-auto my-28">
        <h1 className="text-4xl font-bold mb-10">Log in to Firebase</h1>
        <button onClick={() => google()}>With Google</button>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
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
              name="password"
              id="password"
              className="border outline-none h-8"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error &&
        <label htmlFor="" className="text-red-600 py-4">
          {`⛔ Wrong Email or Password`}
        </label>
        }
        <button
          disabled={email == "" || password == ""}
          className="bg-purple-500 px-4 py-2 text-md text-white rounded-lg self-end mt-8"
          onClick={() => {
            logIn();
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
}