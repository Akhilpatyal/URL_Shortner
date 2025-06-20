import { registerUser, login_User } from "../service/auth.service.js";
import wrapAsync from "../utilities/tryCatchWrapper.js";
import { cookieOptions } from "../config/config.js";

export const register = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const token = await registerUser(name, email, password);
  req.user=user;
  res.cookie("accesstoken", token, cookieOptions);
  res.status(201).json({ message: "User registered successfully" });
});

export const login = wrapAsync(async (req, res) => {
 const {email, password } = req.body;
 const token = await login_User(email, password );
 req.user=user;
 res.cookie("accesstoken", token, cookieOptions);
 res.status(200).json({ message: "User logged in successfully" });
});
