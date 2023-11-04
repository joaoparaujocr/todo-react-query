import { NextFunction, Request, Response } from "express";
import { ZodObject, ZodRawShape } from "zod";

export const validationMiddleware =
  (validate: ZodObject<any>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const parse = validate.required().parse(req.body);

    req.body = parse;

    return next();
  };
