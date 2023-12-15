import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// connectDB();

mongoose.connect(process.env.MONGO_CONNECT);

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port number ${process.env.PORT}`);
});
