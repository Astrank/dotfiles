import Header from "../components/Header"
import Head from "next/head"
import { Post } from "../types/Post"
import posts from "../public/data/posts.json"
import Comments from "../components/Comments"

export default function Posteo({ post }) {
    return (
        <>
           <Head>
                <title>{post.title} | Awesome Blog</title>
                <meta name="description" content="Awesome blog." />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐙</text></svg>" />
            </Head> 

            <Header />

            <div className="w-full mx-auto">
                <h1 className="inline">{post.title}</h1>
                <p className="inline">{post.body}</p>

                <Comments post={`${post.slug}`} />
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            post: posts.find((post) => post.slug === context.params.slug)
        }
     }
}

export async function getStaticPaths() {
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false
    }
}