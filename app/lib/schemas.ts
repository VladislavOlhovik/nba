import { z } from 'zod';

export const formSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full Name is required')
    .max(20, 'Full Name must be less than 20 characters.'),
  email: z
    .string()
    .email('The email you entered seems incorrect.'),
  phone: z
    .string()
    .regex(
      /^\+?[1-9]\d{9}$/,
      'The phone number is incorrect.'
    ),
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(
      20,
      'Company name must be less than 20 characters.'
    ),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(200, 'Message must be less than 200 characters.'),
  file: z
    .any()
    .refine(file => {
      if (file instanceof File) {
        return file.size <= 5000000;
      }
      return true;
    }, 'File size should be less than 5MB')
    .optional()
    .nullable(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
