import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { ConflictError } from "../utilities/errorHandler.js";
import { signToken } from "../utilities/helper.js";

export const registerUser = async (name, email, password) => {
  // firts find the user email if it exists then return false
  const user = await findUserByEmail(email);
  if (user) {
    throw new ConflictError("User already exists!");
  }
  // if not then create a new user
  const newUser = await createUser(name, email, password);
  const token = signToken({ id: newUser._id });
  return token;
};

// user login
export const login_User = async (email, password) => {
  // firts find the user email if it exists then return false
  const user = await findUserByEmail(email);
  if (!user || user.password!== password) {
    throw new ConflictError("Invalid credentials!");
  }

  const token = signToken({ id: user._id });
  return token;
};
