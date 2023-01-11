import Header from '../components/Header'
import Head from 'next/head'
import { useAuth } from "../utils/Auth"
import { useEffect, useState } from 'react'
import { Comment } from '../types/Comment'
import Comments from '../components/Comments'

export default function Home() {
  const { customUser } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);

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
          <Comments />
        </div>
      </main>
    </>
  )
}
