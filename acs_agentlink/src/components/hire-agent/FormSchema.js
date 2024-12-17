import { z } from 'zod';

export const FormDataSchema = z.object({
  //step 1
  companyName: z.string().min(1, "Company Name is required"),
  name: z.string().min(1, "Your Name is required"),
  email: z.string().email("Invalid email"),
  // number_of_agents: z.string().min(1, "Number of agents is required"),  
  location: z.string().min(1, "Location is required"),
  

  tasks: z.string().min(1, "Field is required"),
  skills: z.string().min(1, "Field is required"),
  availability: z.string().min(1, "Availability is required"),
  emailSupportCombined: z.array(z.string()).optional(),
  liveChatCombined: z.array(z.string()).optional(),
  socialMediaCombined: z.array(z.string()).optional(),
  otherPlatformsCombined: z.array(z.string()).optional(),
  startTimeCombined: z.array(z.string()).min(1, "Tell us when you want the agents to start"),
  additional_requirement_detials: z.string().optional(),
});
