import { Router } from "express";
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/user", userRoutes);

export default router;

