import { Request, Response } from "express";
import { deleteTaskService } from "../../services/task";

export const deleteTaskController = async (req: Request, res: Response) => {
  const {
    params: { id },
    user,
  } = req;

  await deleteTaskService(Number(id), user);

  return res.status(204).json(null);
};
