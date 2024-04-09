import orderModel from "../../model/order.js";
// This function for add products
const orderSave = async (req, res) => {
    try {
        const {
            orderId,
            orderdProducts,
            totalPrice,
            name,
            email,
            phone,
            address,
        } = req.body;
        const newOrder = new orderModel({
            orderId,
            products: orderdProducts,
            totalPrice,
            name,
            email,
            phone,
            address,
        });
        const response = await newOrder.save();
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default orderSave;
