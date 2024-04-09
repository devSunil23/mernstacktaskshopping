import cartModel from "../../model/cart.js";

// This function for add products
const addCartController = async (req, res) => {
    try {
        const { productId } = req.body;
        const newCart = new cartModel({
            productId,
        });
        const response = await newCart.save();
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default addCartController;
