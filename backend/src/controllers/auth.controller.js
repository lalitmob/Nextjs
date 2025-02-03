import { validationResult } from "express-validator";
import { userModel } from "../models/user.model";
import createUser from "../services/user.service";
import HTTP_STATUS_CODES from "../httpStatus";
import { User_comments } from "../../constants/comments";
const userAuthentication = {
  register: (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.array() });
    }
    try {
      const { fullName, phone, email, password } = req.body;
      const isUser = userModel.findOne({ email });
      if (isUser) {
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
          .json({ error: User_comments.exist });
      }
      const hashedPassword = userModel.hashPassword(password);
      const user = createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        phone: phone,
        password: hashedPassword,
      });
      const token = user.genrateAuthTokens();
      res.status(HTTP_STATUS_CODES.SUCCESS.CREATED).json({ token, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
