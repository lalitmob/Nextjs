import HTTP_STATUS_CODES from "../httpStatus.js";
import { User_comments } from "../../constants/comments.js";
const user = {
  userinfo: async (req, res) => {
    try {
      const user = req.user;
      console.log("user",user)
      if (!user) {
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.NOT_FOUND)
          .json({ message: User_comments.not_found });
      }
      res.status(HTTP_STATUS_CODES.SUCCESS.OK).json({ user });
    } catch (error) {
      res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ message: error });
    }
  },
};
export default user;
