import { initializeFirebase } from "./Firebase";
import { getDatabase } from 'firebase/database';

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