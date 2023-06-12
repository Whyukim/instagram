"use client";

import "react-multi-carousel/lib/styles.css";
import { SyncLoader } from "react-spinners";
import Avatar from "../Elements/Avatar";
import Link from "next/link";
import ScrollableBar from "./ScrollableBar";
import useMe from "hooks/me";

interface IFollowingBar {}

function FollowingBar({}: IFollowingBar) {
  const { user, isLoading, error } = useMe();
  const users = user?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 bg-blocks shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-auto relative z-0">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <SyncLoader color="#36d7b7" />
        </div>
      ) : (
        (!users || users.length == 0) && <p>{`You don't have folowing`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
            >
              <Avatar image={image} highlight size="large" />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}

export default FollowingBar;
