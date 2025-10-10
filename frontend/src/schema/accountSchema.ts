import { z } from "zod";

export const accountSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name must not exceed 20 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name must not exceed 20 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(20, 'Email characters must not exceed 20 characters'),

  address: z
    .string()
    .min(10, "Address must be at least 10 characters long")
    .max(30, "Address characters must no exceed 30 characters"),

  currentPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[@$!%*?&]/, "Password must contain a special character")
    .optional(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[@$!%*?&]/, "Password must contain a special character")
    .optional(),
  confirmNewPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[@$!%*?&]/, "Password must contain a special character")
    .optional(),
})
  .refine((data) => {
    // If user entered any new password, then validate rules
    if (data.newPassword || data.confirmNewPassword) {
      if (!data.currentPassword) return false;
      if (data.newPassword !== data.confirmNewPassword) return false;
      if (data.newPassword!.length < 8) return false;
    }
    return true;
  }, {
    message: "Password fields are invalid or do not match",
    path: ["confirmNewPassword"]
  });

export type AccountFormData = z.infer<typeof accountSchema>;
