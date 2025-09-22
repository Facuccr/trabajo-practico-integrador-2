import { Router } from "express";

import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.put("/auth/users/:id", updateUser);
userRoutes.get("/auth/users", getAllUsers);
userRoutes.get("/auth/users/:id", getUserById);
userRoutes.delete("/auth/users/:id", deleteUser);
