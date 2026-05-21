import { fetchPosts } from "@/lib/api/articles";
import Styles from "@/styles/articles.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function ArticlePage() {
  const posts = await fetchPosts();

  return (
    <div className={Styles.page}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Articles</h1>

        <div className={Styles.articleGrid}>
          {posts.slice(0, 12).map((post: Post) => (
            <div key={post.id} className={Styles.card}>
              <span className={Styles.badge}>Article #{post.id}</span>

              <h2 className={Styles.articleTitle}>{post.title}</h2>

              <p className={Styles.body}>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
