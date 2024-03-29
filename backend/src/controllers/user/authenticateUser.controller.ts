import { Request, Response } from "express";
import { authenticateUserService } from "../../services/user";

export const authenticateUserController = async (
  req: Request,
  res: Response
) => {
  const token = await authenticateUserService(req.body);

  return res.json(token);
};
