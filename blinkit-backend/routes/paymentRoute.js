import express from 'express';
import { checkout,paymentVerification,fetchOrders,updateStatus} from '../controller/paymentController.js';
import { isAuthenticated, isAdmin} from '../middlewares/auth.js';

const paymentRouter = express.Router();

paymentRouter.post("/checkout",isAuthenticated,checkout);
paymentRouter.post("/paymentVerification",isAuthenticated,paymentVerification);
paymentRouter.get("/fetchOrders/:id",isAuthenticated,fetchOrders);
paymentRouter.put("/updateStatus",isAuthenticated,isAdmin,updateStatus);

export default paymentRouter;