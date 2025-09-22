import { verifyToken } from "../helpers/jwt.helper.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies["token"];

    if (!token) {
      return res
        .status(401)
        .json({ message: "no autenticado para realizar esta accion" });
    }

    const decoded = verifyToken(token);

    req.user = {
      id: decoded._id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    throw new Error("error en el middleware de autenticacion", error.message);
  }
};
