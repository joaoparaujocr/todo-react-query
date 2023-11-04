import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { taskCreateValidate } from "../validations/task";
import { authenticatedUserMiddleware } from "../middlewares/authenticatedUser.middleware";
import { createTaskController } from "../controllers/task/createTask.controller";
import { findAllTasksController } from "../controllers/task/findAllTasks.controller";

const tasksRoutes = Router();

tasksRoutes.post(
  "",
  validationMiddleware(taskCreateValidate.required()),
  authenticatedUserMiddleware,
  createTaskController
);
tasksRoutes.get("", authenticatedUserMiddleware, findAllTasksController);

export default tasksRoutes;
