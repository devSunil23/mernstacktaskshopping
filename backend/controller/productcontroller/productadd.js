import productModel from "../../model/product.js";
// This function for add products
const addProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const newProduct = new productModel({
            name,
            price,
            description,
        });
        const response = await newProduct.save();
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default addProduct;
