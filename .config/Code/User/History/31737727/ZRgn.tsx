export type Comment = {
    id: string,
    author: string,
    userId: string,
    post: string,
    postTitle: string,
    comment: string,
    publishDate: string,
    likes: string[],
    reply: boolean,
    parent: false | string,
    replies: string[],
}