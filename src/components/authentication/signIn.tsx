import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignButton = () => {
  return (
    <Button
      type="submit"
      className="mt-8 h-10 w-full cursor-pointer rounded-sm bg-slate-800 text-white"
    >
      Sign in
    </Button>
  );
};

const Logo = () => {
  return (
    <div className="mb-10 flex items-center gap-2">
      <h1 className="text-2xl font-semibold">
        Approv<span className="text-green-600">Ease</span>
      </h1>
    </div>
  );
};

const RememberMe = () => {
  return (
    <div className="mt-2 w-full">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="size-3.75 cursor-pointer rounded-sm accent-green-600"
        />
        <span className="text-sm">Remember me</span>
      </div>
    </div>
  );
};

const SignUpRedirect = () => {
  return (
    <Link href="/sign-up" className="mt-10 text-sm">
      Not yet registered? <span className="text-green-600">Sign up</span>
    </Link>
  );
};

const SignIn = () => {
  return (
    <form className="flex h-full flex-col items-center justify-center px-20">
      <Logo />
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="h-10 rounded-sm text-center"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="h-10 rounded-sm text-center"
          />
        </div>
      </div>
      <RememberMe />
      <SignButton />
      <SignUpRedirect />
    </form>
  );
};

export default SignIn;
