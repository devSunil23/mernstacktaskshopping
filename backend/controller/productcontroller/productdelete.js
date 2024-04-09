import mongoose from "mongoose";
import productModel from "../../model/product.js";
// This function for get products
const deleteProducts = async (req, res) => {
    const { _id } = req.params;
    try {
        const response = await productModel.deleteOne({ _id });
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default deleteProducts;
