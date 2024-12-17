import { z } from "zod";

export const FormDataSchema = z.object({
  // Step 1
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  whatsapp_number: z
    .string()
    .min(8, "Whatsapp number must be at least 8 characters"),
  telegram: z.string().min(1, "Telegram username is required"),
  location: z.string().min(1, "Location is required"),
  another_job: z.enum(["1", "0"]),
  job_description: z.string().min(1, "Job description is required"),
  availability: z.string().min(1, "Availability is required"),

  // Step 2
  support_experience: z.enum(["1", "0"]),
  support_experience_description: z.string().min(1, "Field is required"),
  emailSupportCombined: z.array(z.string()).optional(),
  liveChatCombined: z.array(z.string()).optional(),
  socialMediaCombined: z.array(z.string()).optional(),
  otherPlatformsCombined: z.array(z.string()).optional(),
  employerCount: z.enum(["1", "2"]),
  employers: z.array(z.object({
    company_name: z.string().min(1, "Company name is required"),
    position_held: z.string().min(1, "Position held is required"),
    duration: z.string().min(1, "Duration is required"),
    supervisor_name: z.string().min(1, "Supervisor name is required"),
    contact: z.string().min(1, "Contact is required"),
  })).min(1, "At least one employer is required"),

  // Step 3
  languages: z
    .array(
      z.object({
        language: z.string().min(1, "Language is required"),
        percent: z.number().min(1, "Percent must be greater than 0"),
      })
    )
    .min(1, "At least one language must be selected"),
    trading_experience: z.enum(["1", "0"]),
    trading_experience_description: z.string().min(1, "Field is required"),
  specific_skills: z.string().min(1, "Field is required"),

  // Step 4
  proficiency: z.number().min(1, "Percent must be greater than 0"),
  responses: z.number().min(1, "Percent must be greater than 0"),
  complex_messages: z.number().min(1, "Percent must be greater than 0"),
  express_dissatisfaction: z.string().min(1, "Field is required"),
  assist_customer: z.string().min(1, "Field is required"),

  // Step 5
  internet_power: z.enum(["1", "0"]),
  internet_power_details: z.string().min(1, "Required"),
  pc: z.enum(["1", "0"]),
  pc_details: z.string().min(1, "Required"),
  tools: z.enum(["1", "0"]),
  tool_details: z.string().min(1, "Required"),
  new_software: z.enum(["1", "0"]),
  new_software_details: z.string().min(1, "Required"),
  additional_information: z.string().min(1, "Required"),
  questions: z.enum(["1", "0"]),
  question_details: z.string().min(1, "Required"),
  resume: z
    .custom((val) => val instanceof File, {
      message: "Resume must be a valid file",
    })
});
