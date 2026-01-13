"use client";

import { useState, Activity } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
// types
import { ViewPasswordProps } from "@/types/auth.type";

const ViewPassword = ({ showPassword, setShowPassword }: ViewPasswordProps) => {
  // toggle password
  const handleClick = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  return (
    <div className="absolute top-0 right-3 flex translate-y-1/2">
      {showPassword ? (
        <HiOutlineEye onClick={handleClick} className="size-5 cursor-pointer" />
      ) : (
        <HiOutlineEyeSlash
          onClick={handleClick}
          className="size-5 cursor-pointer"
        />
      )}
    </div>
  );
};

const SignInButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Button
      type="submit"
      className="mt-8 h-10 w-full cursor-pointer rounded-sm bg-slate-800 text-white"
    >
      <Activity mode={loading ? "visible" : "hidden"}>
        <Spinner />
      </Activity>
      Sign In
    </Button>
  );
};

const RememberMe = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="remember"
          className="size-3.75 cursor-pointer rounded-sm accent-green-600"
        />
        <span className="text-sm">Remember me</span>
      </div>
    </div>
  );
};

const ForgotPassword = () => {
  return (
    <Link href="/auth/forgot-password">
      <p className="text-sm text-nowrap text-green-600 hover:underline">
        Forgot password?
      </p>
    </Link>
  );
};

const SignUpRedirect = () => {
  return (
    <Link href="/auth/sign-up" className="mt-10 text-sm">
      Not yet registered? <span className="text-green-600">Sign up</span>
    </Link>
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

// user sign-in form
const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
            className="h-10 rounded-sm border-gray-300 bg-gray-100 text-center text-xs placeholder:text-gray-500 focus:bg-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="h-10 rounded-sm border-gray-300 bg-gray-100 text-center text-xs placeholder:text-gray-500 focus:bg-white"
            />
            <ViewPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full justify-between">
        <RememberMe />
        <ForgotPassword />
      </div>
      <SignInButton />
      <SignUpRedirect />
    </form>
  );
};

export default SignIn;
