import { NextRequest, NextResponse } from "next/server";
import { disLikePost, likePost } from "service/post";
import { sessionUser } from "util/session";

export async function PUT(req: NextRequest) {
  return sessionUser(async (user) => {
    const { id, like } = await req.json();

    if (!id || like === undefined) {
      return new Response("Bad body", { status: 401 });
    }

    const request = like ? likePost : disLikePost;

    return request(id, user.id)
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(error, { status: 500 }));
  });
}
