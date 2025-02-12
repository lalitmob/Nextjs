import { User_comments } from "../../constants/comments.js";
import HTTP_STATUS_CODES from "../httpStatus.js";
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
      const comments = await commentService.createComment({
        productId: productId,
        repliesId: repliesId || [],
        userId: user.id,
        comment,
        likes,
      });
      console.log("comments", comments);
      res.status(HTTP_STATUS_CODES.SUCCESS.ACCEPTED).json({ comments });
    } catch (error) {
      return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.message });
    }
  },
};
export default commentController;
