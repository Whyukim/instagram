"use client";

import Smile from "components/Elements/icons/Smile";
import { FormEvent, useState, useCallback } from "react";

interface IPostComment {
  onPostComment: (comment: string) => void;
}

function PostComment({ onPostComment }: IPostComment) {
  const [comment, setComment] = useState("");
  const buttonDisabled = comment.length === 0;

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onPostComment(comment);
      setComment("");
    },
    [comment]
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex px-3 items-center border-t-2 border-neutral-300"
    >
      <Smile />
      <input
        type="text"
        className="flex-grow p-2 outline-none bg-transparent"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button
        type="submit"
        className={`${comment.length ? "font-bold" : "opacity-70"}`}
        disabled={buttonDisabled}
      >
        POST
      </button>
    </form>
  );
}

export default PostComment;
