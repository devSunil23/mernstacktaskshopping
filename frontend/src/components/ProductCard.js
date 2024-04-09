import React from "react";
import { Card, Button } from "antd";
import styles from "../assets/css/productPage.module.css";
import { useAtom } from "jotai";
import { addCartService } from "../state-machine/services/cart/addCart";
const ProductCard = ({ productName, description, price, _id }) => {
    const [, addToCart] = useAtom(addCartService);

    const onAddToCart = async () => {
        await addToCart({ productId: _id, productName });
    };

    return (
        <Card className={styles.productCardMainDiv}>
            <div style={{ marginBottom: "1rem" }}>
                <h3>{productName}</h3>
                <p>{description}</p>
                <p>
                    <span style={{ color: "#333A73", fontWeight: "bold" }}>
                        Price
                    </span>{" "}
                    : <span style={{ color: "#0C0C0C" }}>{price}</span>{" "}
                    <span>INR</span>
                </p>
            </div>
            <Button type="primary" onClick={onAddToCart}>
                Add to Cart
            </Button>
        </Card>
    );
};

export default ProductCard;
