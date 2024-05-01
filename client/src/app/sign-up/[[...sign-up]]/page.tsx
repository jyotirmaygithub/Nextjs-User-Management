import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 space-y-4">
      <h1>Sign Up</h1>
      <SignUp path="/sign-up" />;
    </div>
  );
}
