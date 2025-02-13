import { User_comments } from "../../constants/comments.js";
import HTTP_STATUS_CODES from "../httpStatus.js";
import commentsModel from "../models/comments.model.js";
import commentService from "../services/comment.service.js";

const commentController = {
  postComment: async (req, res) => {
    try {
      const user = req.user;
      const productId = req.params.productId;
      if (!productId) {
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
          .json({ message: "ProductId is required" });
      }
      const { repliesId, userId, comment, likes } = req.body;
      if (!user) {
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.UNAUTHORIZED)
          .json({ message: User_comments.Notloggedin });
      }
      console.log(user.fullName.firstName);
      const comments = await commentService.createComment({
        productId: productId,
        repliesId: repliesId || [],
        userId: user.id,
        userName: user.fullName.firstName,
        comment,
        likes,
      });
      res.status(HTTP_STATUS_CODES.SUCCESS.OK).json({ comments });
    } catch (error) {
      return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.message });
    }
  },
  RequestComments: async (req, res) => {
    const user = req.user;
    try {
      if (!user) {
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.UNAUTHORIZED)
          .json({ message: User_comments.Notloggedin });
      }
      const userId = user._id;
      const comment = await commentsModel.find( {userId} );
      if (!comment) {
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
          .json({ message: "No comments to show" });
      }
      res.status(HTTP_STATUS_CODES.SUCCESS.OK).json({ comment });
    } catch (error) {
      res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.message });
    }
  },
};
export default commentController;
