import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
     user_id: {
        type: String,
        required: true
     },
     orders: [
        {
            razorpay_order_id:{
                type: String,
                required:true
            },
            razorpay_payment_id:{
                type: String,
                required: true
            },
            razorpay_signature:{
                type: String,
                required:true
            },
            amount_paid:{
                type: Number,
                required: true
            },
            created_at:{
                type:Date,
                required:true,
                default: Date.now()
            },
            deliver_to:{
                type:Object,
                required:true
            },
            status:{
                type:String,
                required:true,
                default: "Placed"
            }
        }
     ]
})

export const Order = new mongoose.model("Order",orderSchema);