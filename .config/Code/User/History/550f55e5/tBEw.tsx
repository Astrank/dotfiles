import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Post } from "../types/Post";
import { Category } from "../types/Category";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import Instagram from "../components/Instagram";

type ObraProps = {
    posts: Post[],
    categories: Category[],
}

declare global {
    interface Window { google: any; }
    interface Window { googleTranslateElementInit: any; }
}

const Obra: NextPage<ObraProps> = ({ posts }) => {
    const [visiblePosts, editPosts] = useState<Post[]>(posts);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
        {
            pageLanguage: "es",
            autoDisplay: false
        },
        "google_translate_element"
        );
    };
    
    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Head>
                <title>Obra | Verónica Metélico</title>
                <meta
                    name="description"
                    content="Cuentos y Reflexiones | Verónica Metélico"
                />
            </Head>

            <Header />

            <div className="flex flex-col gap-6 text-primary-900 mx-4 my-8 md:mx-10 lg:mx-14 xl:mx-44 mb-auto">
                <div id="google_translate_element"></div>
                <h1 className="font-asap text-3xl">Últimas publicaciones</h1>
                <div className="flex flex-col gap-4 my-6">
                    {visiblePosts && visiblePosts.length > 0 && 
                        visiblePosts.map((post, i) => (
                            <div key={i} className="group flex flex-col gap-3">
                                <Link href={`/obra/${post.slug}`} className="self-start">
                                    <h2 className="font-asap text-2xl group-hover:text-primary-700">{post.title}</h2>
                                </Link>
                                <Link href={`/obra/${post.slug}`}>
                                    <p className="font-roboto font-light text-md text-primary-700 leading-8 md:hidden text-justify">
                                        {post.content
                                            .split(" ")
                                            .slice(0, 15)
                                            .join(" ")}...</p>
                                    <p className="font-roboto font-light text-md text-primary-700 leading-8 hidden md:block text-justify">
                                        {post.content
                                            .split(" ")
                                            .slice(0, 35)
                                            .join(" ")}...</p>
                                </Link>
                                <Link className="flex gap-2 items-center self-end text-sm text-secondary-600 hover:text-secondary-400" href={`/obra/${post.slug}`}>
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
    const posts = await import("../public/data/posts.json").then(
        (res) => res.default
    );

    return {
        props: { posts },
    };
};

export default Obra;
