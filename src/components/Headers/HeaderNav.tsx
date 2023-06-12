"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import GradientClickBtn from "../Elements/Buttons/GradientClickBtn";
import DarkMode from "../Elements/DarkMode/DarkMode";
import Avatar from "../Elements/Avatar";

interface IHeaderNav {}

function HeaderNav({}: IHeaderNav) {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav className="flex items-center gap-4">
      <DarkMode />
      <Link href={"/"} className={navIcon}>
        {pathName == "/" ? <AiFillHome /> : <AiOutlineHome />}
      </Link>
      <Link href={"/search"} className={navIcon}>
        {pathName == "/search" ? <RiSearchFill /> : <RiSearchLine />}
      </Link>
      <Link href={"/add"} className={navIcon}>
        {pathName == "/add" ? <BsPlusSquareFill /> : <BsPlusSquare />}
      </Link>
      {user && (
        <div>
          <Link href={`/user/${user.username}`}>
            <Avatar image={user.image} highlight size="small" />
          </Link>
        </div>
      )}
      {session ? (
        <GradientClickBtn
          title={"로그아웃"}
          onClick={signOut}
          round="rounded-md"
          padding="p-1"
        />
      ) : (
        <GradientClickBtn
          title={"로그인"}
          onClick={signIn}
          round="rounded-md"
          padding="p-1"
        />
      )}
    </nav>
  );
}

export default HeaderNav;

const navIcon = "text-2xl hover:scale-125";
