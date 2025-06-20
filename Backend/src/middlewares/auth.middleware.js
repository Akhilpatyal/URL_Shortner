// check is user is authenticated or not
//write middleware for auth.middleware.js
import { verifyToken } from "../utilities/helper.js";
import { findUserById } from "../dao/user.dao.js";
export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.accesstoken;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const payload = verifyToken(token);
    const user = await findUserById(payload);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
