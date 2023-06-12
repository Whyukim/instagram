"use client";

import Avatar from "components/Elements/Avatar";
import TextBold from "components/Elements/Texts/TextBold";
import TextGray from "components/Elements/Texts/TextGray";
import { SearchUser } from "model/user";
import Link from "next/link";

interface IUserCard {
  user: SearchUser;
}

function UserCard({
  user: { image, username, name, email, followers, following },
}: IUserCard) {
  return (
    <Link href={`/user/${username}`}>
      <li className="flex gap-2 w-full p-4 border border-gray-500">
        <div>
          <Avatar image={image} />
        </div>
        <div>
          <TextBold effect="leading-4">{email}</TextBold>
          <TextGray>{name}</TextGray>
          <TextGray effect="leading-4">{`${followers} followers ${following} following`}</TextGray>
        </div>
      </li>
    </Link>
  );
}

export default UserCard;
