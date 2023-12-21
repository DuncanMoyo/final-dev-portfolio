import { z } from "zod";

const ContactUsValidator = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters long" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be at least 3 characters long" }),
  phoneNumber: z
    .string()
    .min(3, { message: "Phone Number must be at least 3 characters long" })
    .optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  business: z
    .string()
    .min(3, { message: "Business must be at least 3 characters long" }),
  message: z
    .string()
    .min(3, { message: "Message must be at least 3 characters long" }),
});

export default ContactUsValidator;
