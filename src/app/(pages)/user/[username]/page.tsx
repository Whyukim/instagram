import { notFound } from "next/navigation";
import { getUserForProfile } from "service/user";
import UserProfile from "components/Forms/User/UserProfile";
import UserPosts from "components/Forms/User/UserPosts";
import { Metadata } from "next";
import { cache } from "react";

interface IUserPage {
  params: { username: string };
}

const getUser = cache(async (username: string) => getUserForProfile(username));

async function userPage({ params: { username } }: IUserPage) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <section>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}

export default userPage;

export async function generateMetadata({
  params: { username },
}: IUserPage): Promise<Metadata> {
  const user = await getUser(username);

  return {
    title: `${user?.name} (@${user?.username})`,
    description: `${user?.name}'s all posts`,
  };
}
