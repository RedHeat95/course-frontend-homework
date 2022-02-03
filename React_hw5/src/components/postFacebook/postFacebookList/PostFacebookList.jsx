import { PostFacebook } from "../PostFacebook/PostFacebook";
import { postsFacebook } from "./constants";

export const PostFacebookList = () => {

  const OnClickLike = () => {
    alert("Вы поставили Like!")
  };

  const onClickReply = () => {
    alert("Вы оставили Reply!")
  };

  return postsFacebook.map((post) => {
    return (
      <PostFacebook
        name={post.name}
        postDescription={post.postDescription}
        location={post.location}
        timeText={post.timeText}
        onClickLike={OnClickLike}
        onClickReply={onClickReply}
      />
    );
  });
};