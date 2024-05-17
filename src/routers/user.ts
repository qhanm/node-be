import express, { Router, Request, Response } from "express";
import validateMiddleware from "../middleware/validateMiddleware";
import { UserController } from "../controllers/UserController";
import UserCreateDto from "../dto/User/UserCreateDto";
import { container } from "../container";

const userController = container.resolve<UserController>("UserController");

const router: Router = express.Router();

// Resolve dependencies

router.get("/", (req: Request, res: Response) => {
  res.send("User route");
});

// router.post("/", validateMiddleware(UserCreateDto), userController.createUser);

export default router;
