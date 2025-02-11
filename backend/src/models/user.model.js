import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import validator from "validator";
import { db_comment } from "../../constants/comments.js";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      require: true,
      minLength: 3,
      maxLength: 14,
    },
    lastName: {
      type: String,
      require: true,
      minLength: 3,
      maxLength: 12,
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowerCase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        console.log(db_comment.email);
      }
    },
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
});
userSchema.methods.genrateAuthTokens = function () {
  return jwt.sign({ _id: this.id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export const userModel = mongoose.model("user", userSchema);
