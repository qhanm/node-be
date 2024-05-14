import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import User from "./models/user.model";
import sequelize from "./sequelize";
dotenv.config();
console.log("process.env.PORT", { port: process.env.PORT });
sequelize.addModels([__dirname + "/**/*.model.ts"]);

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("OK la");
});

app.post("/", (req: Request, res: Response) => {
  res.json(req.body);
});

app.post("/users", async (req: Request, res: Response) => {
  // Lưu bản ghi vào cơ sở dữ liệu
  // const u = User.build({
  //   name: "nam q",
  //   email: "qhnam.671@gmail.com",
  // });

  // await u.save();
  // console.log("u", u);
  res.send("OK la");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
