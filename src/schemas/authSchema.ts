import * as z from "zod";

// Schema for user sign-in
export const signInSchema = z.object({
  email: z.string().email("Invalid email address, please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Schema for user sign-up
export const signUpSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email address, please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
    agreeToTermsAndConditions: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms and conditions",
      path: ["agreeToTermsAndConditions"],
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
