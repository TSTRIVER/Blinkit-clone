import { instance } from "../index.js";
import crypto from "crypto";
import { Order } from "../model/orderModel.js";

export const checkout = async (req, res, next) => {
  const options = {
    amount: Number(req.body.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);

  res.status(201).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const { amount_paid, deliver_to, user_id } = req.query;
  const deliver_obj = JSON.parse(deliver_to);

  const find_user = await Order.findOne({ user_id: user_id });

  if (find_user) {
    find_user.orders.push({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount_paid,
      deliver_to:deliver_obj,
    });
    await find_user.save();
  } else {
    await Order.create({
      user_id,
      orders: [
        {
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
          amount_paid,
          deliver_to:deliver_obj,
        },
      ],
    });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    res.redirect(
      `http://localhost:3000/paymentSuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

export const fetchOrders = async(req,res,next) => {
      const user = await Order.findOne({user_id:req.params.id});
      let orders_arr = [];

      if(user){
        orders_arr = user.orders;
        res.status(201).json({
          success:true,
          orders_arr
        })
      }
      else{
        res.status(201).json({
           success: true,
           orders_arr
        })
      }
}

export const updateStatus = async(req,res,next) => {
    const {user_id,order_id,status} = req.body;

    let order = await Order.findOneAndUpdate({
      user_id:user_id, "orders.razorpay_order_id":order_id
    },{
      $set:{
        "orders.$.status":status
      }
    },
    { new: true, runValidators: true, usefindandModify: false }
    );

    res.json({
      success: true,
      message: "Order Updated Successfully",
      order
    })
};