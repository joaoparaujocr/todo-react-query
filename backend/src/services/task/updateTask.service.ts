import AppDataSource from "../../data-source";
import { TaskCreate } from "../../dto/task";
import { UserWithoutPassword } from "../../dto/user";
import Task from "../../entities/Task.entity";
import { AppError } from "../../errors/appError";

export const updateTaskService = async (
  taskId: number,
  taskBody: TaskCreate,
  userAuth: UserWithoutPassword
) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const findTask = await taskRepository.findOneBy({
    id: taskId,
    user: { id: userAuth.id },
  });

  if (!findTask) {
    throw new AppError(404, "Task not found");
  }

  const taskUpdate = { ...findTask, ...taskBody };

  await taskRepository.update({ id: taskId }, { ...taskUpdate });

  return taskUpdate;
};
