import { Express } from "express";

import UserRouter from "./user";

const routes = (app: Express) => {
  app.use("/api/users", UserRouter);
};

export default routes;
