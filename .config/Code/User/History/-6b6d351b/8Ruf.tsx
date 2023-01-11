import { initializeFirebase } from "./Firebase";
import { getDatabase } from 'firebase/database';
import { ref, set, onValue, remove } from "firebase/database"
import { useAuth } from "../utils/Auth"
import { Comment } from '../types/Comment'
import { initializeApp, getApps } from "firebase/app";
import { useContext, createContext } from "react";

//initializeFirebase();

const prod = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(prod);
const db = getDatabase(app);

const { user } = useAuth();
const CommentContext = createContext({} as any);

export default function CommentProvider() {
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
