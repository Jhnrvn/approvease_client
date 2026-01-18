"use client";

import { useState, Activity } from "react";
// state store
import { useStore } from "@/store/store";
// ui components
import {
  ViewPassword,
  ForgotPassword,
  RememberMe,
  SignUpRedirect,
} from "./SignInComponents";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Logo from "./logo";
// types
import type { SignInFormType } from "@/types/auth";
// utils
import { validateSignInData } from "@/utils/auth.validation";

// sign-in button component
const SignInButton = ({ loading }: { loading: boolean }) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="mt-8 h-10 w-full cursor-pointer rounded-sm bg-slate-800 text-white transition-colors duration-300 hover:bg-slate-950 disabled:cursor-not-allowed"
    >
      <Activity mode={loading ? "visible" : "hidden"}>
        <Spinner />
      </Activity>
      Sign In
    </Button>
  );
};

// user sign-in form component
const SignInForm = () => {
  // local state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // state and setters from store
  const setSignInForm = useStore((state) => state.setSignInForm);
  const signInForm: SignInFormType = useStore((state) => state.signInForm);
  const openAuthModal = useStore((state) => state.openAuthModal);
  const closeAuthModal = useStore((state) => state.closeAuthModal);

  // sign in handler
  const signInHandler = async () => {
    try {
      setLoading(true);
    } catch (error) {
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  // form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // checks for validation errors
      validateSignInData(signInForm);
      // proceed to sign in
      signInHandler();
    } catch (error: unknown) {
      if (error instanceof Error) {
        // display validation errors
        console.error(error);
        openAuthModal(error.message);
      }
    } finally {
      // close auth modal
      setTimeout(closeAuthModal, 2000);
    }
  };

  return (
    <form
      onSubmit={(e: React.FormEvent) => handleSubmit(e)}
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
      <SignInButton loading={loading} />
      <SignUpRedirect />
    </form>
  );
};

export default SignInForm;
