import { z } from "zod";

export const characterSchema = z.object({
    name: z.string(),
    category: z.string(),
    description: z.string(),
    significanceIndex: z.number(),
    avatar: z.string()
});

export type Character = z.infer<typeof characterSchema>;
