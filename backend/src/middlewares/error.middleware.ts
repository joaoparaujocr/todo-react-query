import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { ZodError } from "zod";
import { QueryFailedError } from "typeorm";

export const errorMiddleware = async (
  err: AppError | ZodError | QueryFailedError | any,
  _request: Request,
  response: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      code: err.statusCode,
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return response.status(500).json(err.format());
  }

  if (err instanceof QueryFailedError) {
    return response.status(500).json(err);
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    code: 500,
    message: "Internal server error",
  });
};
