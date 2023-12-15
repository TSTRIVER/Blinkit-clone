import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import { connectDB } from "./config/db.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// connectDB();

mongoose.connect(
  "mongodb+srv://mohammadtaahawebservices:gGETnjpXTTA8JDBr@aurallink-cluster.55wqsrs.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port number ${process.env.PORT}`);
});
