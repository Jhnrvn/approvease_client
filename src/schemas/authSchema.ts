import * as z from "zod";

// Schema for user sign-in
export const signInSchema = z.object({
  email: z.string().email("Invalid email address, please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
