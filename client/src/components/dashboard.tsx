import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Container, Typography, Box } from "@mui/material";
import { UserProfile } from "@clerk/nextjs";

export default async function dashboard() {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) {
    return (
      <Container className="flex justify-center mt-20">
        <Typography variant="h3">You are not logged in</Typography>
      </Container>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center">
      <UserProfile routing="hash" />
      </div>
    </>
  );
}
