export interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignInFormType {
  signInForm: SignInFormData;
  setSignInForm: (field: keyof SignInFormData, value: string | boolean) => void;
  resetSignInForm: () => void;
}

export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTermsAndConditions: boolean;
}

export interface SignUpFormType {
  signUpForm: SignUpFormData;
  setSignUpForm: (field: keyof SignUpFormData, value: string | boolean) => void;
  resetSignUpForm: () => void;
}

export interface AuthModalType {
  authModal: {
    isOpen: boolean;
    message: string;
  };
  openAuthModal: (message: string) => void;
  closeAuthModal: () => void;
}

export interface TermsAndConditionsType {
  termsAndConditions: boolean;
  setTermsAndConditions: (value: boolean) => void;
  closeTermsAndConditions: () => void;
}

