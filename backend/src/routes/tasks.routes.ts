import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { taskCreateValidate } from "../validations/task";
import { authenticatedUserMiddleware } from "../middlewares/authenticatedUser.middleware";
import {
  createTaskController,
  findAllTasksController,
  updateTaskController,
} from "../controllers/task";

const tasksRoutes = Router();

tasksRoutes.post(
  "",
  validationMiddleware(taskCreateValidate.required()),
  authenticatedUserMiddleware,
  createTaskController
);
tasksRoutes.get("", authenticatedUserMiddleware, findAllTasksController);
tasksRoutes.patch(
  "/:id",
  authenticatedUserMiddleware,
  validationMiddleware(taskCreateValidate.partial()),
  updateTaskController
);

export default tasksRoutes;
