import { Request, Response } from "express";
import { findAllTasksService } from "../../services/task/findAllTasks.service";

export const findAllTasksController = async (req: Request, res: Response) => {
  const allTasks = await findAllTasksService(req.user);

  return res.json(allTasks);
};
