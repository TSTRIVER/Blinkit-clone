import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minLength: [8,"Password Should be Greater than 8 characters"]
    }
})

export const User = mongoose.model("User",userSchema);
