import { Router } from "express";
import { login, signup } from "./authController";
import { RequestHandler } from "express";

const router = Router();

router.post("/signup", signup as RequestHandler);
router.post("/login", login as RequestHandler);

export default router;
