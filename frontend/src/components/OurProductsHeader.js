import React from "react";
import styles from "../assets/css/productPage.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const OurProductsHeader = () => {
    const navigate = useNavigate();
    const redirectToCart = () => {
        navigate("/ourCarts"); // Redirect to the "ourCarts" route
    };

    return (
        <div className={styles.ourProductsHeader}>
            <h2>Our Products</h2>
            <Button
                type="primary"
                style={{
                    backgroundColor: "#201658",
                    borderColor: "#201658",
                    borderRadius: "5px",
                }}
                onClick={redirectToCart} // Call redirectToCart function on button click
            >
                <ShoppingCartOutlined style={{ fontSize: "18px" }} /> Cart
            </Button>
        </div>
    );
};

export default OurProductsHeader;
