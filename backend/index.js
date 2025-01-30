import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { indexcomment } from "./constants/comments.js";
import connectDB from "./src/config/db.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const port = process.env.PORT || 4000;
connectDB()
  .then(console.log(indexcomment.db_connect))
  .then(
    app.listen(port, (req, res) => {
      console.log(indexcomment.server + " " + port);
    })
  )
  .catch((error) => console.log("error connecting to server and database"));