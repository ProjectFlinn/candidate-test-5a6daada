import { z } from "zod";

const envVariables = z.object({
    REACT_APP_CHARACTERS_URL: z.string().min(1, { message: "Missing environment variable" })
});

envVariables.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}
