import { Timestamp } from "firebase/firestore"

export defaul type Comment = {
    author: string,
    post: string,
    comment: string,
    publish_date: Timestamp 
}   