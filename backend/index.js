import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { indexcomment } from "./constants/comments.js";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.router.js";
import userRoutes from "./src/routes/user.router.js";
import commentRoutes from "./src/routes/comments.router.js";
import productRoutes from "./src/routes/product.router.js";
import http from "http";
import { Server } from "socket.io";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const port = process.env.PORT || 4000;
app.use(morgan("dev"));
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", productRoutes);
app.use("/", commentRoutes);
io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);
  socket.on("comment", (sendComment) => {
    io.emit("comment", sendComment);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

connectDB()
  .then(console.log(indexcomment.db_connect))
  .then(
    httpServer.listen(port, (req, res) => {
      console.log(indexcomment.server + " " + port);
    })
  )
  .catch((error) => console.log("error connecting to server and database"));
