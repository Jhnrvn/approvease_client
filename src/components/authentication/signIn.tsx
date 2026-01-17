"use client";

import { useState, Activity } from "react";
import Link from "next/link";
import { useStore } from "@/store/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import Logo from "./logo";
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
      className="mt-8 h-10 w-full cursor-pointer rounded-sm bg-slate-800 text-white transition-colors duration-300 hover:bg-slate-950"
    >
      <Activity mode={loading ? "visible" : "hidden"}>
        <Spinner />
      </Activity>
      Sign In
    </Button>
  );
};

const RememberMe = () => {
  // state and setters from store
  const setSignInForm = useStore((state) => state.setSignInForm);
  const signInForm = useStore((state) => state.signInForm);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={signInForm.rememberMe}
          onChange={(e) => setSignInForm("rememberMe", e.target.checked)}
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

// user sign-in form
const SignIn = () => {
  // local state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // state and setters from store
  const setSignInForm = useStore((state) => state.setSignInForm);
  const signInForm = useStore((state) => state.signInForm);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex h-full flex-col items-center justify-center px-20"
    >
      <Logo headerText="Welcome back" />
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signInForm.email}
            onChange={(e) => setSignInForm("email", e.target.value)}
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
              value={signInForm.password}
              onChange={(e) => setSignInForm("password", e.target.value)}
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
