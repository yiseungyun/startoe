'use client'
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function AuthSession(props) {
  const { session, children } = props;
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
