export type Notification = {
    id: string,
    author: string,
    authorId: string,
    comment: string,
    commentId: string,
    post: string,
    postTitle: string,
    publishDate: string,
    type: string,
    watched: boolean, 

    notification: string,
    comment: comment,
    author: user.displayName,
    userId: string,
    post: postSlug,
    publishDate: Date.now(),
}