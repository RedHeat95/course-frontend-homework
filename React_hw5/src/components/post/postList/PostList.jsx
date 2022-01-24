import { Post } from "../Post";
import { posts } from "./constants";

export const PostList = () => {
  return posts.map((post) => {
    return (
      <Post
        title={post.title}
        subtitle={post.subtitle}
        author={post.author}
      />
    );
  });
};