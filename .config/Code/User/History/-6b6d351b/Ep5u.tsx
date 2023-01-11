import { initializeFirebase } from './Firebase';
import { getDatabase } from 'firebase/database';
import { ref, set, onValue, remove } from "firebase/database"
import { useAuth } from "./Auth"
import { useContext, createContext } from "react";

const app = initializeFirebase();
const db = getDatabase(app);

const { user } = useAuth();
const CommentContext = createContext({} as any);

export function CommentProvider() {
    const getComments = (post: string) => {
        onValue(ref(db, `comments/${post}`), (snapshot) => {
            if(snapshot.val()) {
                return Object.values(snapshot.val())
            }
        });
    }

    const postComment = (post: string, comment: string) => {
        set(ref(db, `comments/${post}/` + comment), {
            userId: user.uid,
            username: user.displayName,
            comment: comment,
            post: post,
            publishDate: Date.now()
        })
    }

    const removeComment = (path: string) => {
        remove(ref(db, path))
    }

    return <CommentContext.Provider value={{getComments, postComment, removeComment}}></CommentContext.Provider>
}

export function useComments() {
    return useContext(CommentContext);
}
