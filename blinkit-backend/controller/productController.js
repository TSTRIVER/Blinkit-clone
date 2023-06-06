import { Product } from "../model/productModel.js";

export const createProduct = async (req, res, next) => {
  const { name, price, quantity, image } = req.body;
  let new_product = await Product.create({
    name:name,
    price:price,
    quantity:quantity,
    image:image,
  });

res.status(201).json({
     success:true,
     new_product
  })
};

export const getAllProducts = async(req,res,next) => {
    let prod_arr = [];
    prod_arr = await Product.find();

    res.status(201).json({
        success:true,
        prod_arr
    })
}

export const updateProduct = async(req,res,next) => {
    let updatedProd = await Product.findById(req.params.id);

    updatedProd = await Product.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
      runValidators: true,
      usefindandModify: false
  })

   res.status(201).json({
      success:true,
       updatedProd
   })
}

export const deleteProduct = async(req,res,next) => {
   await Product.deleteOne({_id:req.params.id});
   res.json({
    success: true,
   })
}