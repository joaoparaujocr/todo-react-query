import { Request, Response } from "express";
import { checkedTaskService } from "../../services/task/checkedTask.service";

export const checkedTaskController = async (req: Request, res: Response) => {
  const {
    user,
    params: { id: taskId },
  } = req;

  const checkedTask = await checkedTaskService(Number(taskId), user.id);

  return res.json(checkedTask);
};
