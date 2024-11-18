import { z } from 'zod';

export const FormDataSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  whatsapp_number: z.string().min(8, "Whatsapp number must be at least 8 characters"),
  telegram: z.string().min(1, "Telegram username is required"),
  location: z.string().min(1, "Location is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  hasAnotherJob: z.boolean(),
  anotherJob: z.string().min(1, "Job description is required"),
  availability: z.string().min(1, "Availability is required"),

  languages: z.array(
    z.object({
      name: z.string().min(1, "A languauge or more is required"),
      percent: z.number().min(0).max(100)
    })
  ).optional(),

  fullTime: z.boolean(),
  constructMessage: z.boolean(),
  promptResponse: z.boolean(),
  hasTradingKnowledge: z.boolean(),
  tradingKnowledge: z.string().min(1, "Trading knowledge is required"),
  has_pc: z.boolean(),
  consistent_pc: z.boolean(),
  internetAccess: z.boolean(),
  resume: z.custom((val) => val instanceof File, { message: "Resume must be a valid file" }).optional(),
});
