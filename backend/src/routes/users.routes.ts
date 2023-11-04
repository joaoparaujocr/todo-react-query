import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { userCreateValidate } from "../validations/user";
import { createUserController } from "../controllers";

const usersRoutes = Router();

usersRoutes.post(
  "",
  validationMiddleware(userCreateValidate),
  createUserController
);

usersRoutes.get("", (req, res) => {
  res.json("dede");
});

export default usersRoutes;
