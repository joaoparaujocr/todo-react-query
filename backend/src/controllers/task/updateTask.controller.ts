import { Request, Response } from "express";
import { updateTaskService } from "../../services/task";

export const updateTaskController = async (req: Request, res: Response) => {
  const {
    params: { id },
    body,
    user,
  } = req;

  const taskUpdate = await updateTaskService(Number(id), body, user);

  return res.json(taskUpdate);
};
