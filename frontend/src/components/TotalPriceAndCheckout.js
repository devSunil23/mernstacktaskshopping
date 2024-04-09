import React, { useState } from "react";
import styles from "../assets/css/ourCart.module.css";
import { useAtom } from "jotai";
import { totalPriceAtom } from "../state-machine/models/cart";
import { Button } from "antd";
import { paymentOrderService } from "../state-machine/services/payment/order";
import InputLabel from "./InputLabel";
import { Input } from "antd";
const TotalPriceAndCheckout = () => {
    const [totalPrice] = useAtom(totalPriceAtom);
    const [, paymentOrder] = useAtom(paymentOrderService);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: null,
        address: "",
    });
    const { name, email, phone, address } = contact;
    const { TextArea } = Input;
    //generate reciept id
    const generateReceiptId = () => {
        // Function to generate a random alphanumeric string
        const alphanumeric =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let receiptId = "";
        for (let i = 0; i < 10; i++) {
            receiptId += alphanumeric.charAt(
                Math.floor(Math.random() * alphanumeric.length)
            );
        }
        return receiptId;
    };

    // on change handller
    const onChangeHandller = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const paymentHandller = async (e) => {
        const receiptId = generateReceiptId();
        await paymentOrder({
            price: totalPrice,
            receiptId,
            event: e,
            name,
            email,
            phone,
            address,
        });
    };
    return (
        <div className={styles.totalPriceAndCheckoutContainer}>
            <div>
                <h2>Contact:</h2>
                <InputLabel
                    id={"name"}
                    labelName={"Name"}
                    placeHolder={"Enter name"}
                    name={"name"}
                    value={name}
                    onChange={onChangeHandller}
                />
                <InputLabel
                    id={"phone"}
                    type="phone"
                    name={"phone"}
                    value={phone}
                    onChange={onChangeHandller}
                    labelName={"Mob. No."}
                    placeHolder={"Enter mobile No."}
                />
            </div>
            <div>
                <InputLabel
                    id={"email"}
                    type="email"
                    labelName={"Email"}
                    name={"email"}
                    value={email}
                    onChange={onChangeHandller}
                    placeHolder={"Enter email"}
                />
                <div>
                    <label htmlFor="address">Address</label>
                    <TextArea
                        value={address}
                        name="address"
                        id="address"
                        onChange={onChangeHandller}
                        placeholder="Enter your address"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </div>
            </div>
            <div>
                <h3>
                    <span style={{ color: "#EABE6C" }}>Total Price:</span>{" "}
                    <span>{totalPrice}/-</span>
                </h3>
                <Button type="primary" onClick={paymentHandller} size="large">
                    Checkout Now
                </Button>
            </div>
        </div>
    );
};

export default TotalPriceAndCheckout;
