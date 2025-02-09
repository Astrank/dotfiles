import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Post } from "../types/Post";
import { NextPage } from "next";

type ObraProps = {
    posts: Post[],
}

const Obra: NextPage<ObraProps> = ({ posts }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Head>
                <title>Obra | Verónica Metélico</title>
                <meta
                    name="description"
                    content="Cuentos y Reflexiones | Verónica Metélico"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="flex flex-col gap-8 text-primary-900 mx-4 my-12 md:mx-10 lg:mx-14 xl:mx-44 mb-auto">
                <div className="flex flex-col gap-10 my-6">
                    {posts && posts.length > 0 && 
                        posts.map((post, i) => (
                            <div key={i} className="group flex flex-col gap-3">
                                <Link href={`/obra/${post.slug}`} className="self-start">
                                    <h2 className="font-asap text-2xl group-hover:text-primary-700">{post.title}</h2>
                                </Link>
                                <Link href={`/obra/${post.slug}`}>
                                    <p className="font-roboto text-md text-primary-700 leading-8">
                                        {post.content
                                            .split(" ")
                                            .slice(0, 35)
                                            .join(" ")}...</p>
                                </Link>
                                <Link className="flex gap-2 items-center justify-end text-sm text-secondary-600 hover:text-secondary-400" href={`/obra/${post.slug}`}>
                                    <span>Ver mas</span>
                                    <svg className="w-4 h-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    const posts = await import("../public/data/posts.json").then(
        (res) => res.default
    );

    return {
        props: posts.filter(post => post.category == "Cuento"),
    };
};

export default Obra;
