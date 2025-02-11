import mongoose, { mongo } from "mongoose";
const conversationScheme = new mongoose.Schema(
  {
    users: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
const conversationModel = mongoose.model("Conversation", conversationScheme);
export default conversationModel;
