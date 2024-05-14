import { Sequelize } from "sequelize-typescript";
import databaseConfig from "./configs/db.config";
import { Dialect } from "sequelize";

const sequelize = new Sequelize({
  database: databaseConfig.development.database,
  dialect: databaseConfig.development.dialect as Dialect,
  username: databaseConfig.development.username,
  password: "",
  storage: ":memory:",
  models: [__dirname + "/models"],
  port: Number(databaseConfig.development.port),
});

export default sequelize;
