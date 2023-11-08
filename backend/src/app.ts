import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import cors, { CorsOptions } from "cors";

const app = express();
const corsOption: CorsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOption));

appRoutes(app);

app.use(errorMiddleware);

export default app;
