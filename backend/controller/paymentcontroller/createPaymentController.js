import Razorpay from "razorpay";
const createPayment = async (req, res) => {
    const { price, recieptId } = req.body;
    try {
        var instance = new Razorpay({
            key_id: process.env.RAZOR_PAY_KEY_ID,
            key_secret: process.env.RAZPOR_PAY_KEY_SECRET,
        });
        const options = {
            amount: price * 100,
            currency: "INR",
            receipt: recieptId,
        };
        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    status: "ERROR",
                    message: "Something went wrong",
                    data: "",
                });
            }
            res.status(200).json({
                status: "SUCCESS",
                data: order,
                message: "Order successfully!",
            });
        });
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            data: error,
            message: "Internal server error",
        });
    }
};
export default createPayment;
