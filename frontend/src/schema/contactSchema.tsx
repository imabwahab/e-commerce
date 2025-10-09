import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(5, "Name should be at least 5 characters")
    .max(16, "Name must not be more than 16 characters"),

  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/fj/, "Phone number can only contain digits, +, -, or spaces"),
  message: z.string().min(10, "message should have at least 10 characters").max(500, "Message should no exceed 500 characters")

});


export type ContactFormData = z.infer<typeof contactSchema>