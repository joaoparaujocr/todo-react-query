import { z } from "zod";
import bcrypt from "bcrypt";

export const userValidate = z.object({
  id: z.number(),
  email: z.string().email(),
  password: z
    .string()
    .min(4)
    .transform((pwd) => bcrypt.hashSync(pwd, 10)),
});

export const userWithoutPasswordValidate = userValidate.omit({
  password: true,
});

export const userCreateValidate = userValidate.omit({
  id: true,
});
