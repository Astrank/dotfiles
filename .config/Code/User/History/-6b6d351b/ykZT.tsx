import { initializeFirebase } from "./Firebase";
import { getDatabase } from 'firebase/database';
import { ref, set, onValue, remove } from "firebase/database"
import { useAuth } from "../utils/Auth"
import { Comment } from '../types/Comment'


const app = initializeFirebase();

export const db = getDatabase(app);

function postComment() {
    set(ref(db, `comments/a/` + comment), {
        user: user.displayName,
        userId: user.uid,
        comment: comment,
        post: "a",
        publish_date: Date.now()
    })
}

function removeComment(path: string) {
    remove(ref(db, path))
}