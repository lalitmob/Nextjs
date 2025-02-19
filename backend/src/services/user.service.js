import { userModel } from "../models/user.model.js";
const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  role,
  phone,
}) => {
  try {
    if (!firstName || !email || !password || !phone || !role) {
      throw new Error("All field are important");
    }
    const user = new userModel({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
      phone,
    });
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default createUser;
