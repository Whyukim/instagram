"use client";

import Avatar from "components/Elements/Avatar";
import FollowButton from "components/Elements/Buttons/FollowButton";
import TextBold from "components/Elements/Texts/TextBold";
import { ProfileUser } from "model/user";

interface IUserProfile {
  user: ProfileUser;
}

function UserProfile({ user }: IUserProfile) {
  const { name, username, image, following, followers, posts } = user;
  const info = [
    {
      title: "posts",
      data: posts,
    },
    {
      title: "followers",
      data: followers,
    },
    {
      title: "following",
      data: following,
    },
  ];

  return (
    <section className="w-full gap-5 flex flex-col md:flex-row items-center justify-center py-12 border-b border-neutral-300">
      <div>
        <Avatar image={image} highlight size="xlarge" />
      </div>
      <div>
        <ul>
          <li className="flex gap-3 flex-col items-center md:flex-row">
            <h5 className="text-2xl">{username}</h5>
            <FollowButton user={user} />
          </li>
          <li className="my-4 flex gap-4">
            {info.map(({ title, data }, index) => (
              <span key={index}>
                <b>{data}</b>
                {title}
              </span>
            ))}
          </li>
          <li className="text-center md:text-start">
            <TextBold>{name}</TextBold>
          </li>
        </ul>
        <div></div>
      </div>
    </section>
  );
}

export default UserProfile;
