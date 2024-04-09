import cartModel from "../../model/cart.js";
// This function for get products
const removeFromCart = async (req, res) => {
    const { _id } = req.params;
    try {
        const response = await cartModel.deleteOne({ _id });
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default removeFromCart;
