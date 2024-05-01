import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) {
    return (
      <div>
        <h2>you are not logged in</h2>
      </div>
    );
  }
  // with this user you can fetch the user details
  console.log("user details  = ", user)
  return (
    <div>
      <h1>Details of the user</h1>
      <p>image url : {user.imageUrl}</p>
      <p>name : {user.firstName}</p>
    </div>
  );
}
