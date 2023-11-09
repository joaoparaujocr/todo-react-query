import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { taskCreateValidate } from "../validations/task";
import { authenticatedUserMiddleware } from "../middlewares/authenticatedUser.middleware";
import {
  createTaskController,
  deleteTaskController,
  findAllTasksController,
  updateTaskController,
} from "../controllers/task";
import { checkedTaskController } from "../controllers/task/checkedTask.controller";

const tasksRoutes = Router();

tasksRoutes.post(
  "",
  validationMiddleware(taskCreateValidate.required()),
  authenticatedUserMiddleware(),
  createTaskController
);
tasksRoutes.patch(
  "/:id",
  authenticatedUserMiddleware(),
  validationMiddleware(taskCreateValidate.partial()),
  updateTaskController
);
tasksRoutes.patch(
  "/:id/checked",
  authenticatedUserMiddleware(),
  checkedTaskController
);
tasksRoutes.get("", authenticatedUserMiddleware(), findAllTasksController);
tasksRoutes.delete("/:id", authenticatedUserMiddleware(), deleteTaskController);

export default tasksRoutes;
