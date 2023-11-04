import AppDataSource from "../../data-source";
import { UserCreate } from "../../dto/user";
import User from "../../entities/User.entity";
import { userWithoutPasswordValidate } from "../../validations/user";

export const createUserService = async (userCreate: UserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.save(userCreate);

  return userWithoutPasswordValidate.parse(user);
};
