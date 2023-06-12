import { NextResponse } from "next/server";
import { createPost, getPosts } from "service/post";
import { sessionUser } from "util/session";

export async function GET(_: Request) {
  return sessionUser(async (user) =>
    getPosts(user.username) //
      .then((res) => NextResponse.json(res))
  );
}

export async function POST(req: Request) {
  return sessionUser(async (user) => {
    const form = await req.formData();
    const text = form.get("text")?.toString();
    const file = form.get("file") as Blob;

    if (!text || !file) {
      return new Response("Bad Request", { status: 400 });
    }

    return createPost(user.id, text, file) //
      .then((data) => NextResponse.json(data));
  });
}
