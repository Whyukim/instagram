"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import GradientClickBtn from "./GradientClickBtn";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <GradientClickBtn
          key={id}
          title={`sign in with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          round="rounded-md"
          padding="p-7"
        />
      ))}
    </>
  );
}
