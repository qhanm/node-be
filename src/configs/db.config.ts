import { Dialect } from "sequelize";

const databaseConfig = {
  development: {
    dialect: process.env.DB_CONNECTION as Dialect,
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    port: Number(process.env.DB_PORT) || 3306,
  },
  test: {
    dialect: process.env.DB_CONNECTION as Dialect,
    storage: ":memory:",
  },
  production: {
    dialect: process.env.DB_CONNECTION as Dialect,
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    port: Number(process.env.DB_PORT) || 3306,
  },
};

export default databaseConfig;
