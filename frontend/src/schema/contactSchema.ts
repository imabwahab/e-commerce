import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name should be at least 1 characters")
    .max(16, "Name must not be more than 16 characters"),

  email: z
    .string()
    .email("Please enter a valid email")
    .max(20, "email characters limit exceeding"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "phone-number characters limit exceeding")
    .regex(/^[0-9+\-\s]+$/, "Phone number can only contain digits, +, -, or spaces"),

  message: z
    .string()
    .min(10, "message should have at least 10 characters")
    .max(500, "Message should no exceed 500 characters")

});


export type ContactFormData = z.infer<typeof contactSchema>