import React from "react";
import { Button } from "antd";
import styles from "../assets/css/ourCart.module.css";
import { useNavigate } from "react-router-dom";
const HeadingCarts = () => {
    const navigate = useNavigate();
    const backHandller = () => {
        navigate("/");
    };
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 50px",
            }}>
            <Button style={{}} onClick={backHandller}>
                Back
            </Button>
            <h2 className={styles.headingCart}>Your cart items</h2>
        </div>
    );
};

export default HeadingCarts;
