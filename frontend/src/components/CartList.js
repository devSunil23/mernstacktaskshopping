import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getCartServices } from "../state-machine/services/cart/getCart";
import styles from "../assets/css/ourCart.module.css";
import {
    cartsAtom,
    orderProductsAtom,
    totalPriceAtom,
} from "../state-machine/models/cart";
import CartItem from "./CartItem";
import { removeFromCartService } from "../state-machine/services/cart/removeCart";
const CartList = () => {
    const [carts] = useAtom(cartsAtom);
    const [, getCarts] = useAtom(getCartServices);
    const [, setTotalPrice] = useAtom(totalPriceAtom);
    const [, rmoveCartFunc] = useAtom(removeFromCartService);
    const [updatedCarts, setUpdatedCarts] = useAtom(orderProductsAtom);

    //fetch carts
    useEffect(() => {
        getCarts();
    }, []);

    //
    useEffect(() => {
        let newCarts = carts.map((item) => {
            return item;
        });
        setUpdatedCarts(newCarts);
        const newTotalPrice = newCarts.reduce((acc, cart) => {
            return acc + cart.price * cart.quantity;
        }, 0);
        setTotalPrice(newTotalPrice);
    }, [carts]);

    const handleQuantityChange = (item, newQuantity) => {
        const newupdatedCarts = updatedCarts.map((cart) => {
            if (cart === item) {
                return { ...cart, quantity: newQuantity };
            }
            return cart;
        });
        setUpdatedCarts(newupdatedCarts);
        const newTotalPrice = newupdatedCarts.reduce((acc, cart) => {
            return acc + cart.price * cart.quantity;
        }, 0);
        setTotalPrice(newTotalPrice);
    };

    //remove from carts
    const removeFormCart = async (_id) => {
        await rmoveCartFunc({ _id });
        const filterUpdateProducts = updatedCarts?.filter((item) => {
            return item?._id !== _id;
        });

        const newTotalPrice = filterUpdateProducts.reduce((acc, cart) => {
            return acc + cart.price * cart.quantity;
        }, 0);
        setUpdatedCarts(filterUpdateProducts);
        setTotalPrice(newTotalPrice);
    };
    return (
        <div className={styles.cartListContainer}>
            {updatedCarts.map((cart) => {
                return (
                    <CartItem
                        onQuantityChange={handleQuantityChange}
                        item={cart}
                        removeFormCart={removeFormCart}
                    />
                );
            })}
        </div>
    );
};

export default CartList;
