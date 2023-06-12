import { SimplePost } from "model/post";
import PostActionBar from "./PostActionBar";
import PostComment from "./PostComment";

interface IPostFooter {
  post: SimplePost;
  children?: React.ReactNode;
}

function PostFooter({ post, children }: IPostFooter) {
  return (
    <div>
      <PostActionBar post={post}>{children}</PostActionBar>
      <PostComment />
    </div>
  );
}

export default PostFooter;
