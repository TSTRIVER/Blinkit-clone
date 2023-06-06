import express from "express";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import fileupload from "express-fileupload";
import router from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import addressRouter from "./routes/addressRoutes.js";
import cors from "cors";
export const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileupload());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1",router);
app.use("/api/v1",productRouter);
app.use("/api/v1",addressRouter);

