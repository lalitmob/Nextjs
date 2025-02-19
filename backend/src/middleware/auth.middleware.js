import HTTP_STATUS_CODES from "../httpStatus.js";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
import { User_comments } from "../../constants/comments.js";
const authMiddleware = async (req, res, next) => {
  const token =
    req.cookies?.token ||
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null);

  try {
    console.log(token);
    if (!token) {
      return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.UNAUTHORIZED)
        .json(User_comments.not_found);
    }
    const secret = process.env.SECRET_KEY;
    const decodeObj = jwt.verify(token, secret);
    const { _id } = decodeObj;
    const user = await userModel.findById(_id);
    if (!user) {
      console.log(user);
      return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.NOT_FOUND)
        .json({ message: User_comments.not_found });
    }
    req.user = user;
    next();
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
      .json({ message: error });
  }
};
export default authMiddleware;
