import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { userCreateValidate, userLoginValidate } from "../validations/user";
import {
  createUserController,
  authenticateUserController,
} from "../controllers/user";

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
