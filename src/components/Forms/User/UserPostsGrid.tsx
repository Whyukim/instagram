"use client";

import { DotLoader } from "react-spinners";
import UserPostGridCard from "./UserPostGridCard";
import usePosts from "hooks/posts";

function UserPostsGrid() {
  const { posts, isLoading } = usePosts();

  return (
    <div className="w-full text-center">
      {isLoading && (
        <div className="flex justify-center mt-32">
          <DotLoader color="#36d7b7" />
        </div>
      )}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <UserPostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UserPostsGrid;
