import { useEffect, useState } from "react";
import styles from "./PostList.module.css";
import { Post, IPost } from "../Post/Post";
import { Button } from "../Button/Button";

export interface IPostWithId extends IPost {
  id: string;
  userId: string;
}

const POST_PER_PAGE = 6;

export const Posts = () => {
  const [posts, setPosts] = useState<IPostWithId[]>([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
    ]).then((response) => {
      const [posts, authors] = response;
      const newPosts = posts.map((post: IPostWithId) => {
        const authorId = post.userId;

        const author = authors.find(
          (author: { id: string }) => author.id === authorId
        );

        return { ...post, author: author.name };
      });

      setPosts(newPosts);
    });
  }, []);

  const postsSliced = posts.slice(0, POST_PER_PAGE * page);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.wrraper}>
      <div className={styles.postsList}>
        {postsSliced.map((item: IPostWithId) => (
          <Post
            key={item.id}
            title={item.title}
            body={item.body}
            author={item.author}
          />
        ))}
      </div>
      <div className={styles.btnShow}>
        <Button text={"Show more"} onClick={showMore} />
      </div>
    </div>
  );
};
