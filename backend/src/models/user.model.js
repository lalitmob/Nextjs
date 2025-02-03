import mongoose from "mongoose";
import validator from "express-validator";
import { db_comment } from "../../constants/comments";
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
    require : true,

  },
  password: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 12,
  },
});
const userModel =  mongoose.model('user', userSchema)