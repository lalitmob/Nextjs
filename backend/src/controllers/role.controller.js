import { User_comments } from "../../constants/comments";
import HTTP_STATUS_CODES from "../httpStatus";

const roleController = {
  enterRole: async (req, res) => {
    const { name, role, email } = req.body;
    const { user } = req.user;
    if (!user) {
      res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.FORBIDDEN)
        .json({ message: User_comments });
    }
  },
};
