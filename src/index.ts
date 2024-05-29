import "reflect-metadata";

import express, { Express } from "express";
import { AppDataSource } from "./data-source";
import { createExpressServer } from "routing-controllers";
import { error } from "console";
import { UserController } from "./controller/user.controller";

AppDataSource.initialize()
  .then(() => {
    const app = createExpressServer({
      controllers: [UserController],
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`[Server] is running with port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
