import { NextRequest, NextResponse } from "next/server";
import { follow, unfollow } from "service/user";
import { sessionUser } from "util/session";

export async function PUT(req: NextRequest) {
  return sessionUser(async (user) => {
    const { id: targetId, follow: isFollow } = await req.json();

    if (!targetId || isFollow === undefined) {
      return new Response("Bad body", { status: 401 });
    }

    const request = isFollow ? follow : unfollow;

    return request(user.id, targetId)
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(error, { status: 500 }));
  });
}
