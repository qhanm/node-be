// routes/users.ts
import express, { Router, Request, Response } from "express";
import validateMiddleware from "../middleware/validateMiddleware";
import { CreateUserDto } from "../dtos/User/CreateUserDto";
import { UserController } from "../controllers/user.controller";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("User route");
});

router.post("/", validateMiddleware(CreateUserDto), UserController.create);

export default router;
