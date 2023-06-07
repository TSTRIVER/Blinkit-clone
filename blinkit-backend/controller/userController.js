import { User } from "../model/userModel.js";
import { setToken } from "../middlewares/token.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res, next) => {
  const { name, number, password } = req.body;
  let new_user = await User.findOne({ number: number });
  if (new_user) {
    return res.json({ err: true });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  new_user = await User.create({
    name: name,
    number: number,
    password: hashedPassword,
  });
  setToken(new_user, 201, res);
};

export const loginUser = async (req, res, next) => {
  const { number, password } = req.body;

  let new_user = await User.findOne({ number: number });
  const isMatch = await bcrypt.compare(password, new_user.password);
  if (!isMatch === null) {
    return res.json({ err: true });
  }
  setToken(new_user, 201, res);
};

export const logoutUser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

export const fetchUsers = async(req,res,next) => {
   const all_users = await User.find();

   res.status(201).json({
      success:true,
      all_users
   })
}
