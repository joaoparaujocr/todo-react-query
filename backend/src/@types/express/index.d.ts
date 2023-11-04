import * as express from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import { UserWithoutPassword } from "../../dto/user";

declare global {
  namespace Express {
    interface Request {
      user: UserWithoutPassword;
    }
  }
}
