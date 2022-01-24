import { PostFacebook } from "../PostFacebook";
import { postsFacebook } from "./constants";

export const PostFacebookList = () => {
    return postsFacebook.map((post) => {
        return (
            <PostFacebook
                name={post.name}
                postDescription={post.postDescription}
                location={post.location}
                timeText={post.timeText}
            />
        );
    });
};