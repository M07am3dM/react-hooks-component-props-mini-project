import Article from "./Article";

export default function ArticleList({posts}) {
    return (
        <main>
            {posts.map((post, id) => <Article key={id} id={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />)}
        </main>
    )
}