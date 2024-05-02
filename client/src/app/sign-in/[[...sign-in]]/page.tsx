import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 space-y-4">
        <h1>Sign In</h1>
        <SignIn path="/sign-in" />
    </div>
  )
  
}