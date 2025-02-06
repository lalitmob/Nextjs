import express from "express";
import { loginValidation, registerValidation } from "../validation.js";
import userAuthentication from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/register", registerValidation, userAuthentication.register);
router.post("/login",loginValidation,userAuthentication.login)
router.post("/logout", userAuthentication.logout)
export default router
