import type { StateCreator } from "zustand";
// types
import type { SignInFormType, SignUpFormType } from "./auth.type";

// combined auth slice type
export type AuthSliceType = SignInFormType & SignUpFormType;

// authentication slice
export const AuthSlice: StateCreator<AuthSliceType, [], []> = (set) => {
  // sign-in form data
  const signInFormData: SignInFormType = {
    signInForm: {
      email: "",
      password: "",
      rememberMe: false,
    },
    setSignInForm: (field, value) => {
      set((state) => ({
        signInForm: {
          ...state.signInForm,
          [field]: value,
        },
      }));
    },
    resetSignInForm: () => {
      signInFormData.signInForm = {
        email: "",
        password: "",
        rememberMe: false,
      };
    },
  };

  // sign-up form data
  const signUpFormData: SignUpFormType = {
    signUpForm: {
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTermsAndConditions: false,
    },
    setSignUpForm: (field, value) => {
      set((state) => ({
        signUpForm: {
          ...state.signUpForm,
          [field]: value,
        },
      }));
    },
    resetSignUpForm: () => {
      signUpFormData.signUpForm = {
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTermsAndConditions: false,
      };
    },
  };

  return {
    ...signInFormData,
    ...signUpFormData,
  };
};
