import "reflect-metadata";
import express from "express";
import AppDataSource from "./configs/data-source";
import { UserController } from "./controllers/UserController";
import { container } from "./container";
import {
  useContainer as routingUseContainer,
  useExpressServer,
} from "routing-controllers";

const app = express();
const port = 3001;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    const app = express();
    const port = 3001;

    useExpressServer(app, {
      routePrefix: "/api",
      controllers: [__dirname + "/controllers/*.ts"],
    });

    app.listen(port, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((error) =>
    console.log("Error during Data Source initialization:", error)
  );
