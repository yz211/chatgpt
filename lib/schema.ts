import { z } from "zod";

export const applyEditArgsSchema = z.object({
  from: z.number(),
  to: z.number(),
  html: z.string().optional(),
  text: z.string().optional()
});

export type ApplyEditArgs = z.infer<typeof applyEditArgsSchema>;
