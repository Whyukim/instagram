import { NextRequest, NextResponse } from "next/server";
import { searchUsers } from "service/user";

export const dynamic = "force-dynamic";

type Context = {
  params: { keyword: string };
};

export async function GET(_: NextRequest, context: Context) {
  return searchUsers(context.params.keyword) //
    .then((data) => NextResponse.json(data));
}
