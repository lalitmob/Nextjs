import mongoose from "mongoose";
import { type } from "os";
const commentsScheme = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const commentsModel = mongoose.model("commentModel", commentsScheme);
export default commentsModel;
