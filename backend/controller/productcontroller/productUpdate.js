import productModel from "../../model/product.js";
// This function for add products
const updateProduct = async (req, res) => {
    try {
        let opts = {
            runValidators: true,
            setDefaultsOnInsert: true,
            upsert: false,
            context: "query",
            new: true,
        };
        const { name, price, description, _id } = req.body;
        const response = await productModel.updateOne(
            { _id },
            {
                name,
                price,
                description,
            },
            opts
        );
        return res.status(200).json({ status: "SUCCESS", data: response });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: "ERROR", data: error });
    }
};
export default updateProduct;
