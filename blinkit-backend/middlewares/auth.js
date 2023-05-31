import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if(!token){
    return null;
  }

    const decoded = jwt.verify(token, "abcdeghij");
    req.user = await User.findById(decoded.id);
    next();
};
