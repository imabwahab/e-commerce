import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(20, "email character limit exceeding"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain an uppercase letter")
    .regex(/[A-Z]/, "Password must contain a lowercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[@$!%*?&]/, "Password must contain a special character")
    .max(25, "password character limit exceeding")
});

export type LoginFormData = z.infer<typeof loginSchema>