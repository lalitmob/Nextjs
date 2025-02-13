import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import commentController from "../controllers/comments.controller.js";
const router = express.Router();
router.post(
  "/comment/send/:productId",
  authMiddleware,
  commentController.postComment
);
router.get("/comment/request", authMiddleware, commentController.RequestComments);
export default router;
