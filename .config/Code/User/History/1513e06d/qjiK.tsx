import React, { useState, useContext, createContext } from "react";
import { getFirestore, collection, setDoc, addDoc, onSnapshot, doc, getDocs, query, arrayUnion, arrayRemove, deleteDoc, updateDoc, where } from "firebase/firestore";
import { initializeFirebase } from "./Firebase";
import { useAuth } from "./Auth";
import { Comment as CommentType } from "../types/Comment";
import { Unsubscribe } from "firebase/auth";

const app = initializeFirebase();
const db = getFirestore(app);

type EscrituraGrupalContextType = {
    postComment: (slug: string, comment: string, post: string) => void;
    replyComment: (comment: string, slug: string, post: string, parent: string | false, commentId: string, replyingTo: string) => void;
    likeComment: (comment: CommentType) => void;
    deleteComment: (id:string, slug: string, notifications: string[]) => void;
    getComments: (slug: string) => void;
    getAllComments: (slug: string) => void;
    deleteNotification: (id: string) => void;
    comments: CommentType[];
    unsubscribe: Unsubscribe | false;
}

const EscrituraGrupalContext = createContext({} as EscrituraGrupalContextType);

export function EscrituraGrupalProvider({ children }: {children : React.ReactNode}) {
    const { user, isAdmin } = useAuth();
    const [comments, setComments] = useState<CommentType[]>([]);
    const uid = "7NXk8PiCwggyA5vWYdJT5lVTxg22";
    let unsubscribe: Unsubscribe | false = false;

    const postStory = async (comment: string) => {
        if(user) {
            try {
                const docRef = await addDoc(collection(db, "escritura-grupal"), {
                    userId: user.uid,
                    author: user.displayName,
                    comment: comment,
                    publishDate: Date.now(),
                    approved: false,
                    notifications: user.uid == uid ? [] : [uid]
                });

                if (user.uid !== uid) {
                    notifyAdmin(`${user.displayName} ha continuado la escritura grupal.`, docRef.id, comment, "escritura-grupal")
                }
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }

    const approveStory = async (id: string) => {
        if (user && isAdmin) {
            await updateDoc(doc(db, "escritura-grupal", id), {
                approved: true
            });
        }
    }

    const notifyAdmin = async (notification: string, commentId: string, comment: string, postSlug: string) => {
        await setDoc(doc(db, "users", uid, "notifications", commentId), {
            notification: notification,
            userId: user.uid,
            author: user.displayName,
            comment: comment,
            commentId: commentId,
            post: postSlug,
            publishDate: Date.now(),
        });
    }

    const notifyUser = async (notification: string, replyingTo: string, commentId: string, comment: string, postSlug: string) => {
        await setDoc(doc(db, "users", replyingTo, "notifications", commentId), {
            notification: notification,
            userId: user.uid,
            author: user.displayName,
            comment: comment,
            commentId: commentId,
            post: postSlug,
            publishDate: Date.now(),
        });
    }

    const deleteNotification = async (id: string) => {
        if (user) {
            await deleteDoc(doc(db, "users", user.uid, "notifications", id));
        }
    }

    return <EscrituraGrupalContext.Provider value={{ comments, unsubscribe, deleteNotification }}>{children}</EscrituraGrupalContext.Provider>;
}

export function useEscrituraGrupal() {
    return useContext(EscrituraGrupalContext);
}
