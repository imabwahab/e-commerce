import { z } from "zod";

export const billingSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name must not exceed 20 characters"),

  companyName: z.string().optional(),

  streetAddress: z
    .string()
    .min(5, "Street address must be at least 5 characters"),

  apartment: z.string().optional(),

  city: z
    .string()
    .min(2, "City name must be at least 2 characters")
    .max(30, "City name must not exceed 30 characters"),

  phone: z
    .string()
    .regex(/^[0-9+\-\s]+$/, "Phone number can only contain digits, +, -, or spaces")
    .min(10, "Phone number must be at least 10 digits"),

  email: z.string().email("Please enter a valid email address"),

  saveInfo: z.boolean().optional(),
});

export type BillingFormData = z.infer<typeof billingSchema>;
