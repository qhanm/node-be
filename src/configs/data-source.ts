import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User";

// Config dotenv
dotenv.config();

const AppDataSource = new DataSource({
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  // entities: ["./src/entity/*.ts"],
  entities: [User],
  migrations: ["src/migration/**/*.ts"],
  cli: { entitiesDir: "src/entities", migrationsDir: "src/migration" },
} as any);

export default AppDataSource;
