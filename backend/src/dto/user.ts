import { z } from "zod";
import { userValidate } from "../validations/user";

export type User = z.infer<typeof userValidate>;

export type UserWithoutPassword = Omit<User, "password">;

export type UserCreate = Omit<User, "id">;
