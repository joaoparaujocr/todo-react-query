import { z } from "zod";
import { userWithoutPasswordValidate } from "./user";

export const taskValidate = z.object({
  id: z.number(),
  content: z.string(),
  crated_at: z.date(),
  updated_at: z.date(),
  user: userWithoutPasswordValidate,
  checked: z.boolean(),
});

export const taskCreateValidate = taskValidate.pick({
  content: true,
});

export const taskWithoutUserValidate = taskValidate.omit({ user: true });
