"use client";

import TextBold from "components/Elements/Texts/TextBold";
import TextGray from "components/Elements/Texts/TextGray";
import { AuthUser } from "model/user";
import { useSession } from "next-auth/react";
import Avatar from "../Elements/Avatar";

interface ISideBar {
  user: AuthUser;
}

function SideBar({ user }: ISideBar) {
  const list = [
    "About ・",
    "Help ・",
    "Press ・",
    "API ・",
    "Jobs ・",
    "Privacy ・",
    "Terms ・",
    "Location ・",
    "Language",
  ];

  return (
    <article>
      <ul className="flex flex-col gap-10">
        {user && (
          <li className="flex gap-3">
            <Avatar image={user.image} size="large" />
            <span>
              <TextBold>{user.email}</TextBold>
              <TextGray>{user.name}</TextGray>
            </span>
          </li>
        )}
        <li>
          <ul className="flex grow gap-2 max-w-full flex-wrap">
            {list.map((v) => (
              <li key={v} className="text-gray-400 cursor-pointer">
                {v}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-gray-700 font-bold dark:text-gray-400">
            @Copyright INSTANGRAMSfrom HELLO
          </p>
        </li>
      </ul>
    </article>
  );
}

export default SideBar;
