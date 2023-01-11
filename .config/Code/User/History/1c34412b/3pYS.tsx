import Dialoga from "./Login"
import { Comment } from "../types/Comment";
import { User } from "firebase/auth";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { getFirestore, collection, addDoc, onSnapshot, doc, query, arrayUnion, arrayRemove, deleteDoc, updateDoc } from "firebase/firestore";
import { initializeFirebase } from "../utils/Firebase";
import CommentStructure from "./CommentStructure";

type CommentProps = {
    comment: Comment,
    replies: Comment[],
    user: User,
    isAdmin: boolean,
    likeComment: (comment: Comment) => {},
    deleteComment: (id: string) => {}
}

const CommentComponent = ({ comment, replies, user, isAdmin, deleteComment, likeComment }: CommentProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isReplyBoxOpen, toggleReplyBox] = useState<boolean>(false)
    const [newComment, writeNewComment] = useState<string>("");
    const [showingReplies, toggleReplies] = useState<boolean>(false);

    const app = initializeFirebase();
    const db = getFirestore(app);

    const replyComment = async () => {
        try {
            const docRef = await addDoc(collection(db, "posts", comment.post, "comments"), {
                userId: user.uid,
                author: user.displayName,
                comment: newComment,
                post: `${comment.post}`,
                publishDate: Date.now(),
                likes: [],
                reply: true,
                parent: comment.id,
                replies: [],
            });

            if(!comment.replies.includes(docRef.id)) {
                await updateDoc(doc(db, "posts", comment.post, "comments", comment.id), {
                    replies: arrayUnion(docRef.id)
                });
            }

            writeNewComment("");
            toggleReplyBox(false);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className='flex flex-col gap-4 mt-8 group' key={comment.id}>
            <CommentStructure comment={comment} likeComment={likeComment} deleteComment={deleteComment} />
            
            {replies && replies.length > 0 && 
                <button onClick={() => toggleReplies(!showingReplies)}>{replies.length == 1 ? `${replies.length} respuesta` : `${replies.length} respuestas` }</button>}

            {replies && replies.length > 0 && 
                replies.map(c => (
                    <p>{c.comment}</p>
                ))}


            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                {/* Overlay */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto bg-white p-14">
                        <Dialoga />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    )
}

export default CommentComponent;