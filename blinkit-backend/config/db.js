import mongoose from "mongoose";

export const connectDB = () => {
mongoose
  .connect(process.env.DB_URI)
  .then((data) => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

}