import { comment_val } from "../../constants/comments";
import commentsModel from "../models/comments.model";
const commentService = async ({ conversationId, senderId, message }) => {
  try {
    if (!conversationId || !senderId || !message) {
      throw new Error(comment_val.fields);
    }
    const newComment = new commentsModel({
      conversationId,
      senderId,
      message,
    });
    await newComment.save();
  } catch (error) {
    throw new Error({ error: error });
  }
};
