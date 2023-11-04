import { z } from "zod";
import { taskValidate } from "../validations/task";

export type Task = z.infer<typeof taskValidate>;

export type TaskCreate = Pick<Task, "content">;
