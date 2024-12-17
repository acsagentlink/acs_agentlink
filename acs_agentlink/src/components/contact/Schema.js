import { z } from 'zod';

export const FormDataSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  reason: z.string().min(1, 'Reason for contact is required'),
  message: z.string().min(1, 'Message is required'),
  hear_about_us: z.string().min(1, 'This field is required'),
});
