const Post = () => {
    return <></>;
};

export const getStaticProps = async () => {
    const posts = await import("../public/data/posts.json").then(
        (res) => res.default
    );

    return {
        props: { posts },
    };
};

export default Post;
