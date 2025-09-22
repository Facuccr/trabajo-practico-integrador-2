import { Router } from "express";
import {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const authRoutes = Router();

authRoutes.post("/auth/register", register);
authRoutes.post("/auth/login", login);

authRoutes.use(authMiddleware);

authRoutes.get("/auth/profile", getProfile);
authRoutes.put("/auth/profile", updateProfile);
authRoutes.post("/auth/logout", logout);
