import { Request, Response } from "express";
import { createTaskService } from "../../services/task/createTask.service";

export const createTaskController = async (req: Request, res: Response) => {
  const { body, user } = req;

  const task = await createTaskService(body, user);

  return res.status(201).json(task);
};
