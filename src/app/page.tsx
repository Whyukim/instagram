import PostList from "components/Main/PostList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import FollowingBar from "components/Main/FollowingBar";
import SideBar from "components/Main/SideBar";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage({}: any) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) redirect("/auth/signin");

  return (
    <section className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-[3fr_1fr] max-w-[850px] ">
      <main className="max-w-full overflow-hidden">
        <FollowingBar />
        <PostList />
      </main>
      <SideBar user={user} />
    </section>
  );
}
