import { Request, Response } from "express";
import User from "../models/user.model";
import { ValidationError } from "sequelize";
import { USER_STATUS } from "../constants/user.const";

const create = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const status = USER_STATUS.NOT_VERIFY;
  try {
    const user = await User.create({
      email,
      password,
      status,
    });
    return res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error });
    } else if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    } else {
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

export const UserController = { create };
