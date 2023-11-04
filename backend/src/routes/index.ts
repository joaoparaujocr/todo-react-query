import { Express } from "express";
import usersRoutes from "./users.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes);
};
