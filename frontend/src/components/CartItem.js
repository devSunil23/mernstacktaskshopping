import React, { useState } from "react";
import { Card, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styles from "../assets/css/ourCart.module.css";

const CartItem = ({ item, onQuantityChange, removeFormCart }) => {
    const { name, price, _id } = item;
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        // Implement logic to increment quantity
        setQuantity(quantity + 1);
        onQuantityChange(item, quantity + 1);
    };

    const handleDecrement = () => {
        // Implement logic to decrement quantity
        if (quantity > 0) {
            setQuantity(quantity - 1);
            onQuantityChange(item, quantity - 1);
        }
    };

    return (
        <Card className={styles.cartItem}>
            <div>
                <span style={{ fontWeight: "bold", color: "#0C0C0C" }}>
                    Name:
                </span>{" "}
                <span style={{ marginLeft: "10px" }}>{name}</span>
            </div>
            <div>
                <span style={{ fontWeight: "bold", color: "#0C0C0C" }}>
                    Price:
                </span>{" "}
                <span style={{ marginLeft: "10px", color: "#D20062" }}>
                    {price} INR
                </span>
            </div>
            <div
                className={styles.quantityControl}
                style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "bold", color: "#0C0C0C" }}>
                    Quantity:
                </span>
                <span style={{ marginLeft: "10px" }}>
                    <Button
                        size="12px"
                        onClick={handleDecrement}
                        icon={<MinusOutlined />}
                    />
                    <span style={{ margin: "5px" }}>{quantity}</span>
                    <Button onClick={handleIncrement} icon={<PlusOutlined />} />
                </span>
            </div>
            <div
                style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "10px",
                }}>
                <Button
                    type="primary"
                    onClick={() => removeFormCart(_id)}
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "transparent",
                        color: "#000000",
                        borderColor: "#000000",
                    }}>
                    Remove from cart
                </Button>
            </div>
        </Card>
    );
};

export default CartItem;
