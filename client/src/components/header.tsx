import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

export default function header() {
  const { userId } = auth();
  console.log("user id = " , userId)
  return (
    <div className="bg-black py-6 text-white px-10 flex justify-between">
      <div className="container">
        <Link href="/">Home</Link>
      </div>
      {userId ? (
        <UserButton />
      ) : (
        <div className="flex space-x-4">
          <Link href="/sign-up">Signup</Link>
          <Link href="/sign-in">signin</Link>
        </div>
      )}
    </div>
  );
}
