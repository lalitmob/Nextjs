import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import productController from "../controllers/product.controller.js";
const router = express.Router();
router.post("/add", authMiddleware, productController.add);
export default router
