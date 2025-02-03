import express from "express";
import { registerValidation } from "../validation";
const route = express.Router();
route.get("/login", registerValidation);
