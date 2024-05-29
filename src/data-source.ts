import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

import dotenv from "dotenv";
dotenv.configDotenv();

export const AppDataSource = new DataSource({
  type: (process.env.DB_CONNECTION as "mysql" | "mariadb") || "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
