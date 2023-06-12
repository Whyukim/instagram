import { getUserByUsername } from "service/user";
import { NextResponse } from "next/server";
import { sessionUser } from "util/session";

export async function GET() {
  return sessionUser(async (user) =>
    getUserByUsername(user.username) //
      .then((res) => NextResponse.json(res))
  );
}
