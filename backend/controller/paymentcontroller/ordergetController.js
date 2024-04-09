import orderModel from "../../model/order.js";

// This function for get order
const getOrder = async (req, res) => {
    try {
        const response = await orderModel.find({});
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default getOrder;
