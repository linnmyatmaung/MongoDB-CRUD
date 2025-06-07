import { Request, Response } from "express";
import * as UserService from "@services/user-service";
import { CreateUserSchema } from "@dtos/user"; // Import the schema, not just the type

export const createUser = async (req: Request, res: Response) => {
  try {
    const userDto = CreateUserSchema.parse(req.body); // Use the schema here
    const user = await UserService.createUser(userDto);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};
