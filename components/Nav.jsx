"use client";

import Link from "next/Link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const isUserLoggedIn = true;

  return (
    <section>
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="promptopia logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className={"logo_text"}>Promptopia</p>
        </Link>
        <div className="sm:flex hidden"></div>
      </nav>
    </section>
  );
}

export default Nav;
