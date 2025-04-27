import jwt from "jsonwebtoken";
import { envs } from "../config/env.config";

const JWT_SECRET = envs.JWT_SECRET || "jadhweu877ye283eHQUIY*@#Q";

export const generateToken = (user: { id: number; role: string }) => {
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
}