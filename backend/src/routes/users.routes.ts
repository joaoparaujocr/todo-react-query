import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { userCreateValidate, userLoginValidate } from "../validations/user";
import { createUserController } from "../controllers";
import { authenticateUserController } from "../controllers/user/authenticateUser.controller";

const usersRoutes = Router();

usersRoutes.post(
  "",
  validationMiddleware(userCreateValidate.required()),
  createUserController
);
usersRoutes.post(
  "/login",
  validationMiddleware(userLoginValidate.optional()),
  authenticateUserController
);

export default usersRoutes;
