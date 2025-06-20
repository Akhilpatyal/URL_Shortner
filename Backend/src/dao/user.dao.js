import userModel from "../models/user.model.js";

//find user by email
const findUserByEmail = async (email) => {
  return await userModel.findOne({ email });
};

//find user by id
const findUserById = async (id) => {
  return await userModel.findById(id);
};
//create user
const createUser = async (name, email, password) => {
  const newUser = await new userModel({ name, email, password });
  return await newUser.save();
};

export { findUserByEmail, findUserById, createUser };
