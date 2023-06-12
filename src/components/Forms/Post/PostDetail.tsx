import Avatar from "components/Elements/Avatar";
import TextBold from "components/Elements/Texts/TextBold";
import { SimplePost } from "model/post";
import Image from "next/image";
import PostHeader from "./PostHeader";
import PostActionBar from "./PostActionBar";
import useFullPost from "hooks/post";

interface IPostDetail {
  post: SimplePost;
}

function PostDetail({ post }: IPostDetail) {
  const { id, userImage, username, image } = post;
  const { post: data, postComment } = useFullPost(id);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostHeader userImage={userImage} username={username} />
        <ul className="flex-grow border-t border-gray-200 overflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(
              ({ image, username: commentUserName, comment }, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Avatar
                    image={image}
                    size="small"
                    highlight={commentUserName == username}
                  />
                  <TextBold>{commentUserName}</TextBold>
                  <span>{comment}</span>
                </li>
              )
            )}
        </ul>
        <PostActionBar post={post} onComment={postComment} />
      </div>
    </section>
  );
}

export default PostDetail;
