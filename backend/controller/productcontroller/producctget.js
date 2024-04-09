import productModel from "../../model/product.js";
// This function for get products
const getProduct = async (req, res) => {
    try {
        const response = await productModel.find({});
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default getProduct;
