import mongoose, { mongo } from "mongoose";
const conversationScheme = new mongoose.Schema(
  {
    fromuserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);
const conversationModel = mongoose.model("Conversation", conversationScheme);
export default conversationModel;
