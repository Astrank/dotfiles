import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Post } from "../types/Post";
import { NextPage } from "next";
import Instagram from "../components/Instagram";

type ReflexionesProps = {
    posts: Post[],
}

const Reflexiones: NextPage<ReflexionesProps> = ({ posts: poesias }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Head>
                <title>Poesía | Verónica Metélico</title>
                <meta
                    name="description"
                    content="Cuentos y Reflexiones | Verónica Metélico"
                />
            </Head>

            <Header />

            <div className="flex flex-col gap-6 text-primary-900 mx-4 my-8 md:mx-10 lg:mx-14 xl:mx-44 mb-auto">
                <h1 className="font-asap text-3xl">Poesía</h1>
                <div className="flex flex-col gap-10 my-6">
                    {poesias && poesias.length > 0 && 
                        poesias.map((poesia, i) => (
                            <div key={i} className="group flex flex-col gap-3">
                                <Link href={`/obra/${poesia.slug}`} className="self-start">
                                    <h2 className="font-asap text-2xl group-hover:text-primary-700">{poesia.title}</h2>
                                </Link>
                                <Link href={`/obra/${poesia.slug}`}>
                                    <p className="font-roboto text-md font-light text-primary-700 leading-8 md:hidden text-justify">
                                        {poesia.content
                                            .split(" ")
                                            .slice(0, 15)
                                            .join(" ")}...</p>
                                    <p className="font-roboto text-md font-light text-primary-700 leading-8 hidden md:block text-justify">
                                        {poesia.content
                                            .split(" ")
                                            .slice(0, 35)
                                            .join(" ")}...</p>
                                </Link>
                                <Link className="flex gap-2 items-center justify-end text-sm text-secondary-600 hover:text-secondary-400" href={`/obra/${poesia.slug}`}>
                                    <span>Seguir leyendo</span>
                                    <svg className="w-4 h-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>

            <section className="mt-14">
                <Instagram />
            </section>

            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    const poesias = await import("../public/data/poesias.json").then(
        (res) => res.default
    );

    return {
        props: {
            poesias: poesias.filter(poesia => poesia.category == "Reflexión")
        },
    };
};

export default Reflexiones;
