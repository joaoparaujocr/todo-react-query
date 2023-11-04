import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { taskCreateValidate } from "../validations/task";
import { authenticatedUserMiddleware } from "../middlewares/authenticatedUser.middleware";
import { createTaskController } from "../controllers/task/createTask.controller";

const tasksRoutes = Router();

tasksRoutes.post(
  "",
  validationMiddleware(taskCreateValidate.required()),
  authenticatedUserMiddleware,
  createTaskController
);

export default tasksRoutes;
