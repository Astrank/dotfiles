import { getFirestore, collection, addDoc, onSnapshot, doc, query, arrayUnion, arrayRemove, deleteDoc, updateDoc } from "firebase/firestore";
import { initializeFirebase } from "../utils/Firebase";
import { useAuth } from "../utils/Auth";
import { useEffect, useState } from "react";
import { Comment } from "../types/Comment";
import CommentComponent from "./Comment";
import { Dialog } from '@headlessui/react'
import Dialoga from "./Login"

type CommentsProps = {
    post: string;
}

const Comments = ({ post }: CommentsProps) => {
    const app = initializeFirebase();
    const db = getFirestore(app);
    const { user, isAdmin } = useAuth();

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
                <textarea 
                    className='border border-black rounded py-2 px-4' 
                    disabled
                    onChange={(e) => writeNewComment(e.target.value)} 
                    onClick={() => !user ? setIsOpen(true) : ""}
                    placeholder={user ? `Comment as ${user.displayName}` : `Log in to comment`} />
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="mx-auto rounded bg-white p-14 rounded-2xl">
                            <Dialoga />
                        </Dialog.Panel>
                    </div>
                </Dialog>
                <button className='hover:underline self-end' onClick={() => postComment(newComment)} disabled={!user || newComment.length < 1}>Comment</button>
            </div>
            <div className="">
                {comments && comments.length > 0 &&
                    comments.map(comment => (
                        <CommentComponent 
                            key={comment.id}
                            comment={comment} 
                            user={user} 
                            isAdmin={isAdmin} 
                            deleteComment={deleteComment}
                            likeComment={likeComment} />
                ))}
            </div>
        </div>
    )
}

export default Comments;