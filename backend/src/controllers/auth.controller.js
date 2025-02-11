import { validationResult } from "express-validator";
import { userModel } from "../models/user.model.js";
import createUser from "../services/user.service.js";
import HTTP_STATUS_CODES from "../httpStatus.js";
import { User_comments } from "../../constants/comments.js";
const userAuthentication = {
  register: async (req, res) => {
    console.log(req);

    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log("validation");
      return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.array() });
    }
    try {
      const { fullName, phone, email, password } = req.body;
      const isUser = await userModel.findOne({ email });
      if (isUser) {
        console.log("user not found");
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
          .json({ message: User_comments.exist });
      }
      const hashedPassword = await userModel.hashPassword(password);
      const user = await createUser({
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
  login: async (req, res) => {
    const { email, password } = req.body;
    const error = validationResult(req);
    if (!error) {
      return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.array() });
    }
    try {
      const user = await userModel.findOne({ email }).select("+password");
      if (!user) {
        res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.UNAUTHORIZED)
          .json({ error: User_comments.not_found });
      }
      const isPassMatching = await user.comparePassword(password);
      if (!isPassMatching) {
        return res
          .status(HTTP_STATUS_CODES.CLIENT_ERROR.UNAUTHORIZED)
          .json({ error: User_comments.Cred_incorrect });
      }
      const token = await user.genrateAuthTokens();
      res.cookie("token", token);
      return res.status(HTTP_STATUS_CODES.SUCCESS.OK).json({
        token,
        user,
      });
    } catch (error) {
      res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.message });
    }
  },
  logout: async (req, res) => {
    res.cookie("token", null, { expires: new Date(Date.now()) });
    res.status(HTTP_STATUS_CODES.SUCCESS.OK).send("Logout successfully")
  },
};

export default userAuthentication;
