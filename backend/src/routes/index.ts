import { Express } from "express";
import usersRoutes from "./users.routes";
import tasksRoutes from "./tasks.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes);
  app.use("/tasks", tasksRoutes);
};
