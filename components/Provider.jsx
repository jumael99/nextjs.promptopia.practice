"use client";

import { SessionProvider } from "@node_modules/next-auth/react";

function Provider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Provider;
