import express from 'express';
const productRouter = express.Router();
import { createProduct,getAllProducts,updateProduct,deleteProduct} from '../controller/productController.js';
import {isAuthenticated,isAdmin} from "../middlewares/auth.js";

productRouter.post("/createProduct",createProduct);
productRouter.get("/products",getAllProducts);
productRouter.put("/updateprod/:id",updateProduct);
productRouter.delete("/delprod/:id",deleteProduct);

export default productRouter;