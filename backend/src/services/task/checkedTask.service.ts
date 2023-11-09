import { boolean } from "zod";
import AppDataSource from "../../data-source";
import Task from "../../entities/Task.entity";
import { AppError } from "../../errors/appError";

export const checkedTaskService = async (taskId: number, userId: number) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const findTask = await taskRepository.findOne({
    where: { id: taskId },
    relations: {
      user: true,
    },
  });

  if (!findTask) {
    throw new AppError(404, "Task not found");
  }

  if (findTask.user.id !== userId) {
    throw new AppError(403, "You do not have permission");
  }

  await taskRepository.update({ ...findTask }, { checked: true });

  return await taskRepository.findOneBy({ id: taskId });
};
