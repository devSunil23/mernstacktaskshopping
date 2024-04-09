import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema(
    {
        orderId: {
            type: String,
            required: true,
        },

        products: {
            type: [Object],
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    { timestamps: true }
);
const orderModel = model("order", orderSchema);
export default orderModel;
