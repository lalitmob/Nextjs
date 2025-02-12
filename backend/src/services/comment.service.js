import { comment_val } from "../../constants/comments.js";
import commentsModel from "../models/comments.model.js";

const commentService = {
  createComment: async ({ productId, repliesId, userId, comment }) => {
    try {
      if (!productId || !userId || !comment) {
        throw new Error(comment_val.fields);
      }

      const newComment = new commentsModel({
        productId,
        userId,
        comment,
        repliesId: repliesId || [],
        likes: [],
      });

      await newComment.save();
      return newComment;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default commentService;
