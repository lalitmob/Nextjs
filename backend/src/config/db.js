import mongoose from "mongoose";
const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECT);
};
export default connectDB;
