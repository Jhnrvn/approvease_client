"use client";

import { useState, Activity } from "react";
import { useStore } from "@/store/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Logo from "./logo";
import {
  TermsAndConditions,
  ViewPassword,
  SignInRedirect,
} from "./SignUpComponents";

// sign up button component
const SignUpButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Button
      type="button"
      className="mt-8 h-10 w-full cursor-pointer rounded-sm bg-slate-800 text-white transition-colors duration-300 hover:bg-slate-950"
    >
      <Activity mode={loading ? "visible" : "hidden"}>
        <Spinner />
      </Activity>
      Sign Up
    </Button>
  );
};

// sign up form component
const SignUp = () => {
  // local state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // state and setters from store
  const signUpForm = useStore((state) => state.signUpForm);
  const setSignUpForm = useStore((state) => state.setSignUpForm);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex h-full flex-col items-center justify-center px-20"
    >
      <Logo headerText="Create an account" />
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signUpForm.email}
            onChange={(e) => setSignUpForm("email", e.target.value)}
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
              value={signUpForm.password}
              onChange={(e) => setSignUpForm("password", e.target.value)}
              className="h-10 rounded-sm border-gray-300 bg-gray-100 text-center text-xs placeholder:text-gray-500 focus:bg-white"
            />
            <ViewPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              value={signUpForm.confirmPassword}
              onChange={(e) => setSignUpForm("confirmPassword", e.target.value)}
              className="h-10 rounded-sm border-gray-300 bg-gray-100 text-center text-xs placeholder:text-gray-500 focus:bg-white"
            />
            <ViewPassword
              showPassword={showConfirmPassword}
              setShowPassword={setShowConfirmPassword}
            />
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full justify-between">
        <TermsAndConditions />
      </div>
      <SignUpButton />
      <SignInRedirect />
    </form>
  );
};

export default SignUp;
