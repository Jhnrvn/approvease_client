// sign in form types
export type SignInFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

// sign up form types
export type SignUpFormType = {
  signUpForm: {
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTermsAndConditions: boolean;
  };
};

// sign up form types
export type ViewPasswordProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

// terms and conditions types
export interface TermsAndConditionsInfoType {
  id: number;
  title: string;
  content: string;
}
