import { getFirestore, collection, addDoc, onSnapshot, doc, query, arrayUnion, arrayRemove, deleteDoc, updateDoc } from "firebase/firestore";
import { initializeFirebase } from "../utils/Firebase";
import { useAuth } from "../utils/Auth";
import { useEffect, useState } from "react";
import { Comment } from "../types/Comment";
import Dialoga from "../components/Dialog"
import * as Dialog from "@radix-ui/react-dialog";


type ComentariosProps = {
    post: string;
}

const Comentarios = ({ post }: ComentariosProps) => {
    const app = initializeFirebase();
    const db = getFirestore(app);
    const { user, isAdmin } = useAuth();

    const [login, renderLogin] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, writeNewComment] = useState<string>("");

    // Get all comments of post
    useEffect(() => {
        const q = query(collection(db, "posts", post, "comments"));
        onSnapshot(q, (commentsQuery) => {
            setComments(commentsQuery.docs.map((c) => {
                let comment = c.data();
                comment.id = c.id;
                return comment as Comment
            }));
        });
    }, [])

    const postComment = async (comment: string) => {
        try {
            const docRef = await addDoc(collection(db, "posts", post, "comments"), {
                userId: user.uid,
                author: user.displayName,
                comment: comment,
                post: `${post}`,
                publishDate: Date.now(),
                likes: []
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const deleteComment = async (id: string) => {
        await deleteDoc(doc(db, "posts", post, "comments", id))
    };

    const likeComment = async (comment: Comment) => {
        if(!comment.likes.includes(user.uid)) {
            await updateDoc(doc(db, "posts", post, "comments", comment.id), {
                likes: arrayUnion(user.uid)
            });
        } else {
            await updateDoc(doc(db, "posts", post, "comments", comment.id), {
                likes: arrayRemove(user.uid)
            });
        }
    };

    return (
        <div className='mt-20 mb-10 w-1/2'>
            <span className='mt-8 font-bold'>Comments ({comments?.length})</span>
            <div className='flex flex-col gap-4 my-4'>
                <textarea className='border border-black rounded py-2 px-4' onChange={(e) => writeNewComment(e.target.value)} placeholder={user ? `Comment as ${user.displayName}` : `Log in to comment`} />
                <button className='hover:underline self-end' onClick={() => postComment(newComment)} disabled={!user || newComment.length < 1}>Comment</button>
            </div>
            <div className="">
                {comments && comments.length > 0 &&
                    comments.map((comment, i) => (
                    <div className='flex flex-col gap-4 mt-8 group' key={i}>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className='font-bold'>{comment.author}</span>
                                <span> · {new Date(comment.publishDate).toLocaleString("es-AR", {dateStyle: 'long', timeStyle: 'short'})}</span>
                            </div>
                            {(comment.userId === user?.uid || isAdmin) &&
                                <button className="hidden justify-self-end group-hover:block" onClick={() => deleteComment(comment.id)} >
                                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                                </button>}
                        </div>
                        <p>{comment.comment}</p>
                        
                        <Dialog.Root open={login}>
                            <Dialog.Trigger>
                                <button className="self-start text-sm flex items-center gap-2" onClick={() => user ? likeComment(comment) : renderLogin(!login)}>
                                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill={ comment.likes.includes(user?.uid) ? "currentColor" : "none" } viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <span>{comment.likes.length}</span>
                                </button>
                            </Dialog.Trigger>
                            <Dialog.Overlay className="overflow-scroll inset-0 fixed bg-black opacity-30" />
                            <Dialog.Content className="">
                                        <Dialoga />
                            </Dialog.Content>
                        </Dialog.Root>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comentarios;