import express from "express";
const addressRouter = express.Router();
import { addAddress,getAddresses,updateAddress} from "../controller/addressController.js";
import {isAuthenticated} from "../middlewares/auth.js";

addressRouter.post("/createAddress",isAuthenticated,addAddress);
addressRouter.get("/getAddresses/:id",isAuthenticated,getAddresses);
addressRouter.put("/updateAddress/:id",isAuthenticated,updateAddress);

export default addressRouter;