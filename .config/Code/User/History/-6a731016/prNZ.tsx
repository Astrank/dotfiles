import Header from '../components/Header'
import Head from 'next/head'
import { useAuth } from "../utils/Auth"
import { useEffect, useState } from 'react'
import { Comment } from '../types/Comment'
import Comments from '../components/Comments'

export default function Home() {
  const { user } = useAuth();
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
          <div className='mt-20 w-1/2'>
            <span className='mt-8 font-bold'>Comments ({comments?.length})</span>
            <div className='flex flex-col gap-4 my-4'>
              <textarea className='border border-black rounded py-2 px-4' placeholder={user ? `Comment as ${user.displayName}` : `Log in to comment`} />
              <button className='hover:underline self-end' disabled={!user}>Comment</button>
            </div>
              <div>
                {comments && comments.length > 0 &&
                  comments.map((comment, i) => (
                  <div className='flex flex-col gap-4 mt-8' key={i}>
                    <div>
                      <span className='font-bold'>{comment.author}</span>
                      <span> · {new Date(comment.publishDate).toLocaleString("es-AR", {dateStyle: 'long', timeStyle: 'short'})}</span>
                    </div>
                    <p>{comment.comment}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </main>
    </>
  )
}
