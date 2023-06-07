import express from "express";
const router = express.Router();

import {registerUser,loginUser,logoutUser,fetchUsers} from "../controller/userController.js";


router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);
router.get("/fetchUsers",fetchUsers);

export default router;