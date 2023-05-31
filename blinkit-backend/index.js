import express from "express";
import {app} from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import {connectDB} from "./config/db.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port number ${process.env.PORT}`);
});
