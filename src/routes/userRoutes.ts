import { Router } from "express";
import authRoutes from "../modules/user/auth/authRoutes";

const route = Router();

route.use("/auth", authRoutes);

export default route;