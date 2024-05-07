import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Container, Typography } from "@mui/material";
import { UserProfile } from "@clerk/nextjs";

export default async function Dashboard() {
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
    <Container className="flex justify-center mt-20">
      <UserProfile routing="hash" />
    </Container>
  );
}
