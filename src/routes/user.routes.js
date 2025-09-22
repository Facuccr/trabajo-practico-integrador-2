import { Router } from "express";

import { getAllUsers } from "../controllers/user.controller.js";

export const userRoutes = Router();

// userRoutes.post("/users", createUser);
userRoutes.get("/users", getAllUsers);
// userRoutes.post("/users", createUser);
// userRoutes.post("/users", createUser);
