import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import user from "../controllers/user.controller.js";
const router = express.Router();
router.get("/userinfo", authMiddleware, user.userinfo);
export default router