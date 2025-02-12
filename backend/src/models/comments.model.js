import mongoose from "mongoose";
const commentsScheme = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    repliesId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "comment"
    }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const commentsModel = mongoose.model("comment", commentsScheme);
export default commentsModel;
