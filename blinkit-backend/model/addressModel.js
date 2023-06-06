import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  addresses: [
    {
      set_as: {
        type: String,
        required: true,
      },
      receiver: {
        type: String,
        required: true,
      },
      flat: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Address = mongoose.model("Address", addressSchema);
