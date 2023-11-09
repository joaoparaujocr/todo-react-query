import AppDataSource from "../../data-source";
import { UserWithoutPassword } from "../../dto/user";
import Task from "../../entities/Task.entity";

export const findAllTasksService = async (userAuth: UserWithoutPassword) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const { id, email } = userAuth;

  const allTasks = await taskRepository.find({
    where: {
      user: {
        id,
        email,
      },
    },
    order: {
      id: "DESC",
    },
  });

  return allTasks;
};
