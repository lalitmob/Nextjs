import roleModel from "../models/role.model";

export const roleService = async ({ name, role, email }) => {
  if (!name || !role || !email) {
    throw new Error("name , role, email fields are neccessary ");
  }
  const newRole = await roleModel.create({
    name,
    role,
    email,
  });
};
