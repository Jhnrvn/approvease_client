import Link from "next/link";
// state store
import { useStore } from "@/store/store";
// types
import type { ViewPasswordProps } from "@/types/auth";
// icons
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

// view password component
export const ViewPassword = ({
  showPassword,
  setShowPassword,
}: ViewPasswordProps) => {
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

// terms and conditions
export const TermsAndConditions = () => {
  // state and setters from store
  const signUpForm = useStore((state) => state.signUpForm);
  const setSignUpForm = useStore((state) => state.setSignUpForm);
  const setTermsAndConditions = useStore(
    (state) => state.setTermsAndConditions,
  );

  // handle checkbox click for terms and conditions
  const handleCheckboxClick = () => {
    if (signUpForm.agreeToTermsAndConditions) {
      setSignUpForm("agreeToTermsAndConditions", false);
    }
  };

  return (
    <div
      className="w-full"
      onClick={() =>
        setTermsAndConditions(!signUpForm.agreeToTermsAndConditions)
      }
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="termsAndConditions"
          name="termsAndConditions"
          checked={signUpForm.agreeToTermsAndConditions}
          onChange={() => handleCheckboxClick()}
          className="size-3.75 cursor-pointer rounded-sm accent-green-600"
        />
        <span className="cursor-pointer text-xs font-medium hover:underline">
          I agree to the{" "}
          <span className="font-semibold text-green-600">Terms</span> and
          <span className="font-semibold text-green-600"> Conditions</span>
        </span>
      </div>
    </div>
  );
};

// redirect to sign in page
export const SignInRedirect = () => {
  return (
    <Link href="/auth/sign-in" className="mt-10 text-xs">
      Already have an account? <span className="text-green-600">Sign in</span>
    </Link>
  );
};
