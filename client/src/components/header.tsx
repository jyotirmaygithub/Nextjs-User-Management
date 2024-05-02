import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function ButtonAppBar() {
  const { userId } = auth();
  console.log("user id = ", userId);
  return (
    <>
      <div className="flex justify-between items-center p-8">
        <Link href="/">
          <div className="flex justify-center items-center space-x-4">
            <Person2OutlinedIcon sx={{ color: "black" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              USER
            </Typography>
          </div>
        </Link>
       {userId ? <UserButton/> : <div>
          <Link href="/sign-up">
            <Button sx={{ color: "black" }}>Sign In</Button>
          </Link>
          <Link href="/sign-in">
            <Button sx={{ color: "black" }}>Login</Button>
          </Link>
        </div>}
      </div>
    </>
  );
}
