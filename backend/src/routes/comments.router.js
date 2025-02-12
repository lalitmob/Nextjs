import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import commentController from "../controllers/comments.controller.js";
const router = express.Router();
router.post(
  "/comment/send/:productId",
  authMiddleware,
  commentController.postComment
);
export default router;
