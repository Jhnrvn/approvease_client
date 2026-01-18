import * as z from "zod";
// Schema for user sign-in
import { signInSchema } from "../schemas/authSchema";
// types
import type { SignInFormType } from "../types/auth";

// Function to validate sign-in data
export const validateSignInData = (signInForm: SignInFormType) => {
  const result = signInSchema.safeParse(signInForm);
  if (!result.success) {
    // flatten the error object
    const err = z.flattenError(result.error);

    // check for form errors
    for (const entry of Object.entries(err.fieldErrors)) {
      if (entry[1]?.length) {
        const errorMessage = entry[1]?.[0];
        throw new Error(errorMessage);
      }
    }
  } else {
    return result.data;
  }
};
