"use client";

import PostCard from "components/Forms/Post/PostCard";
import usePosts from "hooks/posts";
import { DotLoader } from "react-spinners";

function PostList() {
  const { posts, isLoading: loading } = usePosts();

  return (
    <section>
      {loading && (
        <div className="flex justify-center mt-32">
          <DotLoader color="#36d7b7" />
        </div>
      )}
      {posts && (
        <ul className="grid gap-10">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} priority={index < 2} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default PostList;
