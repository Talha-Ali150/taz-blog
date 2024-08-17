import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function AuthLinks() {
  const {status} = useSession()
//   console.log(status)
//   const status = "authenticated";
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
}
