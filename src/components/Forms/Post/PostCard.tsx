"use client";

import ModalPortal from "components/Elements/Modals/ModalPortal";
import PostModal from "components/Elements/Modals/PostModal";
import { Comment, SimplePost } from "model/post";
import Image from "next/image";
import { useState } from "react";
import PostDetail from "./PostDetail";
import PostHeader from "./PostHeader";
import TextBold from "components/Elements/Texts/TextBold";
import PostActionBar from "./PostActionBar";
import usePosts from "hooks/posts";
interface IPostCard {
  post: SimplePost;
  priority: boolean;
}

function PostCard({ post, priority = false }: IPostCard) {
  const { userImage, username, image, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);
  const { postComment } = usePosts();

  const handlePostComment = (comment: Comment) => {
    postComment(post, comment);
  };

  return (
    <li className=" bg-blocks shadow-md shadow-neutral-300 border-2 rounded-xl">
      <PostHeader userImage={userImage} username={username} />
      <div>
        <Image
          className="w-full object-cover aspect-square"
          src={image}
          alt={"postImage"}
          width={500}
          height={500}
          priority={priority}
          onClick={() => setOpenModal(true)}
        />
      </div>
      <PostActionBar post={post} onComment={handlePostComment}>
        {text && (
          <span className="flex gap-2">
            <TextBold>{username}</TextBold>
            <p>{text}</p>
          </span>
        )}
        {comments > 1 && (
          <button
            className="text-left text-sky-500 font-bold"
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </PostActionBar>
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </li>
  );
}

export default PostCard;
