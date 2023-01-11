import { initializeFirebase } from "./Firebase";
import { getDatabase } from 'firebase/database';
import { ref, set, onValue, remove } from "firebase/database"
import { useAuth } from "../utils/Auth"
import { Comment } from '../types/Comment'


const app = initializeFirebase();
const db = getDatabase(app);

const { user } = useAuth();

export default function useComments() {
    function postComment(post: string, comment: string, username: string, userId: string) {
        set(ref(db, `comments/${post}/` + comment), {
            userId: user.uid,
            username: user.displayName,
            comment: comment,
            post: "a",
            publish_date: Date.now()
        })
    }

    function removeComment(path: string) {
        remove(ref(db, path))
    }
}
