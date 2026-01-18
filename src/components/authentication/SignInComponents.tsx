import Link from "next/link";
// state store
import { useStore } from "@/store/store";
// types
import type { ViewPasswordProps } from "@/types/auth";
// icons
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

// component to toggle password visibility
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

// component for forgot password link
export const ForgotPassword = () => {
  return (
    <Link href="/auth/forgot-password">
      <p className="text-xs text-nowrap text-green-600 hover:underline">
        Forgot password?
      </p>
    </Link>
  );
};

// component for remember me checkbox
export const RememberMe = () => {
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
        <span className="text-xs">Remember me</span>
      </div>
    </div>
  );
};

// component for sign-up redirect link
export const SignUpRedirect = () => {
  return (
    <Link href="/auth/sign-up" className="mt-10 text-xs">
      Not yet registered? <span className="text-green-600">Sign up</span>
    </Link>
  );
};
