import mongoose, { Schema, model } from "mongoose";

const cartSchema = new Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
        },
    },
    { timestamps: true }
);
const cartModel = model("cart", cartSchema);
export default cartModel;
