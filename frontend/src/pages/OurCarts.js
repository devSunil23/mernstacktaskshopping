import React from "react";
import HeadingCarts from "../components/HeadingCarts";
import CartList from "../components/CartList";
import TotalPriceAndCheckout from "../components/TotalPriceAndCheckout";
import styles from "../assets/css/ourCart.module.css";
const OurCarts = () => {
    return (
        <div className={styles.cartMainContainer}>
            <HeadingCarts />
            <CartList />
            <TotalPriceAndCheckout />
        </div>
    );
};

export default OurCarts;
