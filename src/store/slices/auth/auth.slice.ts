import type { StateCreator } from "zustand";
// types
import type {
  SignInFormType,
  SignUpFormType,
  AuthModalType,
  TermsAndConditionsType,
} from "./auth.type";

// combined auth slice type
export type AuthSliceType = SignInFormType &
  SignUpFormType &
  AuthModalType &
  TermsAndConditionsType;

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

  // authentication modal state
  const authModal: AuthModalType = {
    authModal: {
      isOpen: false,
      message: "",
    },
    openAuthModal: (message: string) => {
      set(() => ({
        authModal: {
          isOpen: true,
          message,
        },
      }));
    },
    closeAuthModal: () => {
      set(() => ({
        authModal: {
          isOpen: false,
          message: "",
        },
      }));
    },
  };

  // terms and conditions
  const terms: TermsAndConditionsType = {
    termsAndConditions: false,
    setTermsAndConditions: (value: boolean) => {
      set(() => ({
        termsAndConditions: value,
      }));
    },
    closeTermsAndConditions: () => {
      set(() => ({
        termsAndConditions: false,
      }));
    },
  };

  return {
    ...signInFormData,
    ...signUpFormData,
    ...authModal,
    ...terms,
  };
};
