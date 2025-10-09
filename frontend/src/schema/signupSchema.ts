import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(5, "Name should be at least 5 characters")
    .max(16, "Name must not be more than 16 characters"),

  email: z.string().email("Please enter a valid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[@$!%*?&]/, "Password must contain a special character"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
