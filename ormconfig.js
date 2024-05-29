module.exports = {
  type: "mysql2",
  host: "localhost",
  port: 3306,
  username: "namqh",
  password: "123456",
  database: "test",
  synchronize: false,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
  },
};
