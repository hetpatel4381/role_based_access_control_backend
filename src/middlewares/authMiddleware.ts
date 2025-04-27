import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envs } from "../config/env.config";
import { Role } from "../generated/prisma";

const JWT_SECRET = envs.JWT_SECRET || "jadhweu877ye283eHQUIY*@#Q";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & { id: number; role: Role };
        req.user = { id: decoded.id, role: decoded.role };
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: "Token has Expired" });
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: "Invalid Token" });
        } else {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}