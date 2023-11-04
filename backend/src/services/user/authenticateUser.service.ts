import "dotenv/config";
import AppDataSource from "../../data-source";
import { UserCreate } from "../../dto/user";
import User from "../../entities/User.entity";
import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authenticateUserService = async (user: UserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const genericError = new AppError(401, "Invalid email or password");

  const findUser = await userRepository.findOneBy({ email: user.email });

  if (!findUser) {
    throw genericError;
  }

  const passwordIsCorrect = bcrypt.compareSync(
    user.password,
    findUser.password
  );

  if (!passwordIsCorrect) {
    throw genericError;
  }

  const token = jwt.sign(
    { id: findUser.id, email: findUser.email },
    process.env.SECRET_KEY!,
    {
      expiresIn: "30 days",
    }
  );

  return { token };
};
