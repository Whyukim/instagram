"use client";

import { ProfileUser } from "model/user";
import Button from "./Button";
import useMe from "hooks/me";
import { startTransition, useCallback, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

interface IFollowButton {
  user: ProfileUser;
}

function FollowButton({ user }: IFollowButton) {
  const { username } = user;
  const { user: loggedInUser, toggleFollow } = useMe();
  const router = useRouter();
  const [isPending, setIsPending] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isUpdating = isPending || isFetching;

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = following ? "Unfollow" : "Follow";

  const onClick = useCallback(async () => {
    setIsFetching(true);
    await toggleFollow(user.id, !following);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  }, [user.id, following]);

  return (
    <div className="relative">
      {isUpdating && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <PulseLoader size={6} />
        </div>
      )}
      {showButton && (
        <Button
          disabled={isUpdating}
          text={text}
          onClick={onClick}
          red={text === "Unfollow"}
        />
      )}
    </div>
  );
}

export default FollowButton;
