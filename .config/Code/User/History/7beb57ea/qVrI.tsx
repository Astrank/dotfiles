import React, { useState, useContext, createContext } from "react";
import { getFirestore, collection, setDoc, addDoc, onSnapshot, doc, getDocs, query, arrayUnion, arrayRemove, deleteDoc, updateDoc, where } from "firebase/firestore";
import { initializeFirebase } from "./Firebase";
import { useAuth } from "./Auth";
import { Comment as CommentType } from "../types/Comment";
import { Unsubscribe } from "firebase/auth";

const app = initializeFirebase();
const db = getFirestore(app);

type CommentsContextType = {
    postComment: (slug: string, comment: string, post: string) => void;
    replyComment: (comment: string, slug: string, post: string, parent: string | false, commentId: string, replyingTo: string) => void;
    likeComment: (comment: CommentType) => void;
    deleteComment: (id:string, slug: string, notifications: string[]) => void;
    getComments: (slug: string) => void;
    getAllComments: (slug: string) => void;
    comments: CommentType[];
    unsubscribe: Unsubscribe | false;
}

const CommentsContext = createContext({} as CommentsContextType);

export function CommentsProvider({ children }: {children : React.ReactNode}) {
    const { user, isAdmin } = useAuth();
    const [comments, setComments] = useState<CommentType[]>([]);
    const uid = "7NXk8PiCwggyA5vWYdJT5lVTxg22";
    let unsubscribe: Unsubscribe | false = false;

    const getComments = async (slug: string) => {
        setComments([]);
        
        const q = query(collection(db, "posts", slug, "comments"));
        unsubscribe = onSnapshot(q, (commentsQuery) => {
            setComments(commentsQuery.docs.map((c) => {
                let comment = c.data();
                comment.id = c.id;
                return comment as CommentType
            }));
        });
    }

    const getAllComments = async (slug: string) => {
        const q = query(collection(db, "posts", slug, "comments"));
        let array: CommentType[] = []

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const c = doc.data();
            c.id = doc.id;
            array.push(c as CommentType);
        });

        setComments(array)
    }

    const postComment = async (slug: string, comment: string, post: string) => {
        if(user) {
            try {
                const docRef = await addDoc(collection(db, "posts", slug, "comments"), {
                    userId: user.uid,
                    author: user.displayName,
                    comment: comment,
                    post: slug,
                    postTitle: post,
                    publishDate: Date.now(),
                    likes: [],
                    parent: false,
                    isReply: false,
                    notifications: user.uid == uid ? [] : [uid]
                });

                if (user.uid !== uid) {
                    const notiRef = await setDoc(doc(db, "notifications", uid, "comment", docRef.id), {
                        notification: " ha comentado en ",
                        userId: user.uid,
                        author: user.displayName,
                        comment: comment,
                        post: slug,
                        postTitle: post,
                        publishDate: Date.now(),
                    });
                }
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    const replyComment = async (comment: string, slug: string, post: string, parent: string | false, commentId: string, replyingTo: string) => {
        if(user) {
            try {
                const docRef = await addDoc(collection(db, "posts", slug, "comments"), {
                    userId: user.uid,
                    author: user.displayName,
                    comment: comment,
                    post: slug,
                    postTitle: post,
                    publishDate: Date.now(),
                    likes: [],
                    parent: parent ? parent : commentId,
                    isReply: true,
                    replyingTo: replyingTo,
                    notifications: user.uid == uid ? [replyingTo] : [uid, replyingTo]
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    const likeComment = async (comment: CommentType) => {
        if (user) {
            if(!comment.likes.includes(user.uid)) {
                await updateDoc(doc(db, "posts", comment.post, "comments", comment.id), {
                    likes: arrayUnion(user.uid)
                });
            } else {
                await updateDoc(doc(db, "posts", comment.post, "comments", comment.id), {
                    likes: arrayRemove(user.uid)
                });
            }
        }
    };

    const deleteComment = async (id: string, slug: string, notifications: string[]) => {
        if (user && isAdmin) {
            await deleteDoc(doc(db, "posts", slug, "comments", id));
            notifications.forEach(async (n) => {
                await deleteDoc(doc(db, "notifications", n, "comment", id));
            })

            // Delete subcomments
            comments
                .filter(comment => comment.parent == id)
                .forEach(async comment => {
                    await deleteDoc(doc(db, "posts", slug, "comments", comment.id));

                    comment.notifications.forEach(async (n) => {
                        await deleteDoc(doc(db, "notifications", n, "comment", comment.id));
                    })
                });
        }
    };

    return <CommentsContext.Provider value={{ comments, unsubscribe, getComments, getAllComments, postComment, replyComment, likeComment, deleteComment }}>{children}</CommentsContext.Provider>;
}

export function useComments() {
    return useContext(CommentsContext);
}
