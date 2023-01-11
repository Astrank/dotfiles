import Header from '../components/Header'
import Head from 'next/head'
import { useAuth } from "../utils/Auth"
import { useEffect } from 'react'
import Comments from '../components/Comments'
import Comentarios from '../components/Comentarios'
import { Post } from '../types/Post'
import { NextPage } from 'next'

type PostsProps = {
  posts: Post[]
}

const Home: NextPage<PostsProps> = ({ posts }) => {
  const { user } = useAuth();

  useEffect(() => {
  }, [])
  
  return (
    <>
      <Head>
        <title>Awesome Blog</title>
        <meta name="description" content="Awesome blog." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐙</text></svg>" />
      </Head>

      <main>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-full">
          <h1 className="text-4xl font-bold text-purple-500 mt-28">Hello{user ? ` ${user.displayName || user.email}` : ''}!</h1>
          <Comentarios slug="post" />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await import("../public/data/posts.json")
    .then(
      (res) => res.default
    );

  return {
    props: { posts }
  }
}

export default Home;