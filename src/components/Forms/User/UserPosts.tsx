"use client";
import { ProfileUser } from "model/user";
import { MouseEvent, useCallback, useState } from "react";
import UserPostsGrid from "./UserPostsGrid";
import { CacheKeysContext } from "context/CacheKeyContext";

interface IUserPosts {
  user: ProfileUser;
}

const tabs = ["posts", "saved", "liked"];
function UserPosts({ user: { username } }: IUserPosts) {
  const [query, setQuery] = useState("posts");

  const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setQuery(e.currentTarget.innerText);
  }, []);

  return (
    <ul>
      <li className="w-full justify-center flex gap-14 justify-center">
        {tabs.map((v, index) => (
          <button
            key={index}
            onClick={onClick}
            className={`uppercase border-black pt-4 ${
              query.toLocaleLowerCase() == v && "font-bold border-t"
            } `}
          >
            {v}
          </button>
        ))}
      </li>
      <CacheKeysContext.Provider
        value={{ postsKey: `/api/users/${username}/${query}` }}
      >
        <UserPostsGrid />
      </CacheKeysContext.Provider>
    </ul>
  );
}

export default UserPosts;
