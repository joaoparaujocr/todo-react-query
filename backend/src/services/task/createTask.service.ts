import AppDataSource from "../../data-source";
import { TaskCreate } from "../../dto/task";
import { UserWithoutPassword } from "../../dto/user";
import Task from "../../entities/Task.entity";
import { taskWithoutUserValidate } from "../../validations/task";

export const createTaskService = async (
  taskContent: TaskCreate,
  user: UserWithoutPassword
) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const taskCreate = await taskRepository.save({
    content: taskContent.content,
    user: {
      id: user.id,
      email: user.email,
    },
  });

  return taskWithoutUserValidate.parse(taskCreate);
};
