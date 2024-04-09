import cartModel from "../../model/cart.js";
import productModel from "../../model/product.js";

const getCartController = async (req, res) => {
    try {
        const cartResponse = await cartModel.find({});
        const productIds = cartResponse.map((cartItem) => cartItem.productId);

        const products = await productModel.find({ _id: { $in: productIds } });

        const productsMap = {};
        products.forEach((product) => {
            productsMap[product._id] = {
                name: product?.name,
                price: product?.price,
                quantity: 1,
                productId: product?._id,
            };
        });

        const cartItems = cartResponse
            .map((cartItem) => {
                // Check if product exists in productsMap
                if (productsMap[cartItem?.productId]) {
                    return {
                        _id: cartItem?._id,
                        name: productsMap[cartItem?.productId]?.name,
                        price: productsMap[cartItem?.productId]?.price,
                        quantity: productsMap[cartItem?.productId]?.quantity,
                        productId: cartItem?.productId,
                    };
                }
                // If product not found, return null
                return null;
            })
            .filter((item) => item !== null);
        return res.status(200).json({ status: "SUCCESS", data: cartItems });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};

export default getCartController;
