import { authOptions } from "app/api/auth/[...nextauth]/route";
import NewPost from "components/Forms/Add/NewPost";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface IaddPage {}

export const metadata: Metadata = {
  title: "New Post",
  description: "Create a new post",
};

async function addPage({}: IaddPage) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) redirect("/auth/signin");

  return <NewPost user={session.user} />;
}

export default addPage;
