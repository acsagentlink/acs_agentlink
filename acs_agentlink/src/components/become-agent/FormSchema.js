import { z } from 'zod';

export const FormDataSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phoneNo: z.string().min(8, "Phone number must be at least 8 characters"),
  telegramUsername: z.string().min(1, "Telegram username is required"),
  country: z.string().min(1, "Country is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  hasWorkExperience: z.boolean(),
  workExperience: z.string().min(1, "Work experience is required"),
  resume: z.custom((val) => val instanceof File, { message: "Resume must be a valid file" }).optional(),
  availability: z.boolean(),
  preferredTime: z.string(),
  fullTime: z.boolean(),
  constructMessage: z.boolean(),
  promptResponse: z.boolean(),
  hasTradingKnowledge: z.boolean(),
  tradingKnowledge: z.string().min(1, "Trading knowledge is required"),
  has_pc: z.boolean(),
  consistent_pc: z.boolean(),
  internetAccess: z.boolean(),
  type: z.string().min(1, "Please select one")
});
