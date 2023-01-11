import { Timestamp } from "firebase/firestore"

export type Comment = {
    author: string,
    userId: string,
    post: string,
    comment: string,
    publishDate: Timestamp
}   