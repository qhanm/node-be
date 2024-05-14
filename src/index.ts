import bodyParser from "body-parser";
import express, { Express } from "express";
import routes from "./routers";
import dotenv from "dotenv";

// Config dotenv
dotenv.config();

// import sequelize from "./sequelize";

// sequelize.addModels([__dirname + "/**/*.model.ts"]);

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// ** Config routers
routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
