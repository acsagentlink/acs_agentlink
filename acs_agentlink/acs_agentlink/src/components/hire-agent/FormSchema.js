import { z } from 'zod';

export const FormDataSchema = z.object({
  companyName: z.string().min(1, "Company Name is required"),
  companyEmail: z.string().email("Invalid email"),
  number_of_agents: z.string().min(1, "Number of agents is required"),
  
  workingHours: z.string(),
  
});
