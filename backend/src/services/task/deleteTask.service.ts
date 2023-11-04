import AppDataSource from "../../data-source";
import { UserWithoutPassword } from "../../dto/user";
import Task from "../../entities/Task.entity";
import { AppError } from "../../errors/appError";

export const deleteTaskService = async (
  taskId: number,
  userAuth: UserWithoutPassword
) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const findTask = await taskRepository.findOneBy({
    id: taskId,
    user: { ...userAuth },
  });

  if (!findTask) {
    throw new AppError(404, "Task not found");
  }

  await taskRepository.delete(findTask)

  return;
};
