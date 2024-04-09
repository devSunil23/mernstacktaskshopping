import { atom } from "jotai";
import axios from "axios";
import { backend_url, loaderAtom } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
import { orderProductsAtom } from "../../models/cart";
export const paymentOrderService = atom(null, async (get, set, args) => {
    set(loaderAtom, true);
    const { price, receiptId, event, name, email, phone, address } = args;
    try {
        const response = await (
            await axios.post(`${backend_url}/payment/order`, {
                price,
                recieptId: receiptId,
            })
        ).data;
        if (response.status === "SUCCESS") {
            const { id, amount } = response.data;
            var options = {
                key: "rzp_test_VEvBysjwWT9Hvg", // Enter the Key ID generated from the Dashboard
                amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Developer sunil", //your business name
                description: "Test Transaction",
                image: "https://www.rapidoform.com/be/images/emailTemplate/discountbanner.png",
                order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: async function (response) {
                    const resposneSuccessPayment = await (
                        await axios.post(
                            `${backend_url}/payment/paymentsuccess`,
                            {
                                orderId: id,
                                orderdProducts: get(orderProductsAtom),
                                totalPrice: amount / 100,
                                name,
                                email,
                                phone,
                                address,
                            }
                        )
                    ).data;

                    if (resposneSuccessPayment?.status === "SUCCESS") {
                        openNotificationWithIcon(
                            "success",
                            "Thankyou, your order has been placed!",
                            ""
                        );
                    } else {
                        throw "Error in order";
                    }

                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature);
                },
                prefill: {
                    //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                    name: "Sunil user", //your customer's name
                    email: "suniluser@gmail.com",
                    contact: "9174732051", //Provide the customer's phone number for better conversion rates
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
            event.preventDefault();
            rzp1.on("payment.failed", function (response) {
                openNotificationWithIcon("error", "Your payment failed", "");
            });
        }
    } catch (error) {
        const message = `Internal Server Error`;
        const description = "";
        openNotificationWithIcon("error", message, description);
    } finally {
        set(loaderAtom, false);
    }
});
