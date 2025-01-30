import mongoose from "mongoose";
import validator from "express-validator";
import { db_comment } from "../../constants/comments";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 14,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowerCase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
          console.log(db_comment.email)
      }
    },
  },
  password : {
    type : String,
    require : true,
    minLength : 5,
    maxLength : 12,
  }
});
