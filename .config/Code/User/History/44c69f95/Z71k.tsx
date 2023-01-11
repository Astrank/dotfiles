import Header from "../components/Header"
import Head from "next/head"
import { Post } from "../types/Post"
import posts from "../public/data/posts.json"

export default function Posteo({posts}) {
    return (
        <>
           <Head>
                <title>Awesome Blog</title>
                <meta name="description" content="Awesome blog." />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐙</text></svg>" />
            </Head> 

            <Header />

            <div>
                {posts && posts.length > 0 &&
                    posts.map((post, i) => (
                        <div key={i}>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                        </div>
                    ))}
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