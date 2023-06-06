import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if(!token){
    return res.json({
       success:false,
       message: "Please Login First to access this resource"
    });
  }

    const decoded = jwt.verify(token, "abcdefghij");
    req.user = await User.findById(decoded.id);
    next();
};

export const isAdmin = async(req,res,next) => {
       const {token} = req.cookies;
       if(!token){
        return null;
       }

       const decoded = jwt.verify(token,"abcdefghij");
       req.user = await User.findById(decoded.id);
       return req.user.role === 'Admin' ? next() : null;
}
