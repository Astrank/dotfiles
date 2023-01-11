import { initializeFirebase } from "./Firebase";
import { getDatabase } from 'firebase/database';
import { ref, set, onValue, remove } from "firebase/database"
import { useAuth } from "../utils/Auth"
import { Comment } from '../types/Comment'


const app = initializeFirebase();
const db = getDatabase(app);

const { user } = useAuth();

export function getComments(post: string): Comment[] | null {
    onValue(ref(db, `comments/${post}`), (snapshot) => {
        if(snapshot.val()) {
            return Object.values(snapshot.val())
        }
    });

    return null;
}

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
}
