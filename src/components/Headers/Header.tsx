import Link from "next/link";
import HeaderNav from "./HeaderNav";

interface IHeader {}

function Header({}: IHeader) {
  return (
    <header className="bg-blocks w-full mx-auto  min-h-16 border">
      <div className=" max-w-[1220px] flex items-center justify-between py-5 px-5 mx-auto">
        <Link href={"/"} className="text-2xl">
          <strong>instagrams</strong>
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
