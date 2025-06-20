import { nanoid } from "nanoid";
import jsonwebtoken from "jsonwebtoken";
import { cookieOptions } from "../config/config.js";

export const generateNanoid = (length) => {
  return nanoid(length);
};

// sign in jsontoken
export const signToken = (payload) => {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};
// sign in verifyToken
export const verifyToken = (token) => {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET);
}
