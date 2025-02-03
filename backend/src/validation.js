import { body } from "express-validator";
import { validation_comments } from "../constants/comments.js";
export const registerValidation = [
  body("email").isEmail().withMessage(validation_comments.email),
  body("fullName.firstName")
    .isLength({ min: 3 })
    .withMessage(validation_comments.firstName),
  body("phone").isMobilePhone("any").withMessage(validation_comments.phone),
  body("password")
    .isLength({ min: 5 })
    .withMessage(validation_comments.password.length)
    .matches(/[A-Z]/)
    .withMessage(validation_comments.password.Capital)
    .matches(/[a-z]/)
    .withMessage(validation_comments.password.lowerCase)
    .matches(/[0-9]/)
    .withMessage(validation_comments.password.number)
    .matches(/[\W_]/)
    .withMessage(validation_comments.password.special_char),
];

export const loginValidation = [
  body("email").isEmail().withMessage(validation_comments.email),
  body("password")
    .isLength({ min: 5 })
    .withMessage(validation_comments.password.length)
    .matches(/[A-Z]/)
    .withMessage(validation_comments.password.Capital)
    .matches(/[a-z]/)
    .withMessage(validation_comments.password.lowerCase)
    .matches(/[0-9]/)
    .withMessage(validation_comments.password.number)
    .matches(/[\W_]/)
    .withMessage(validation_comments.password.special_char),
];
// Function	What it Does
// body("field")	Validates data only from req.body (used for POST/PUT requests)
// check("field")	Validates data from anywhere (req.body, req.query, req.params, req.headers)
// So, for form validation (req.body), always use body().
// For URL parameters or query validation, use param() or query().
