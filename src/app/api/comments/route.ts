import { NextRequest, NextResponse } from "next/server";
import { addComment } from "service/post";
import { sessionUser } from "util/session";

export async function POST(req: NextRequest) {
  return sessionUser(async (user) => {
    const { id, comment } = await req.json();

    if (!id || comment === undefined) {
      return new Response("Bad body", { status: 401 });
    }

    return addComment(id, user.id, comment)
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(error, { status: 500 }));
  });
}
