import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import User from "../entities/User.entity";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { UserWithoutPassword } from "../dto/user";
import { userWithoutPasswordValidate } from "../validations/user";

export const authenticatedUserMiddleware =
  (returnResponse: boolean = false) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User);
    const authorization = req.headers.authorization;
    const token = authorization && authorization.split(" ")[1];

    if (!token) {
      throw new AppError(401, "Without authorization");
    }

    const payload: UserWithoutPassword = jwt.verify(
      token,
      process.env.SECRET_KEY!
    ) as UserWithoutPassword;

    const findUser = await userRepository.findOneBy({
      id: payload.id,
      email: payload.email,
    });

    if (!findUser) {
      throw new AppError(404, "Token user not found");
    }

    const user = userWithoutPasswordValidate.parse(findUser);

    if (returnResponse) {
      return res.json(user);
    }

    req.user = user;

    return next();
  };
