import express from "express";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import fileupload from "express-fileupload";
import router from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import addressRouter from "./routes/addressRoutes.js";
import paymentRouter from "./routes/paymentRoute.js";
import cors from "cors";
export const app = express();

const corsOption = {
  origin: "https://blinkitc.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOption));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileupload());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", router);
app.use("/api/v1", productRouter);
app.use("/api/v1", addressRouter);
app.use("/api/v1", paymentRouter);

app.get("/api/v1/getkey", (req, res) =>
  res.status(201).json({
    key: process.env.RAZORPAY_API_KEY,
  })
);
