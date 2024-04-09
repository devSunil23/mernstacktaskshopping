import { atom } from "jotai";
import axios from "axios";
import { backend_url } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
import { ordersAtom } from "../../models/payment";

export const getOrdersServices = atom(null, async (get, set, args) => {
    try {
        const response = await (
            await axios.get(`${backend_url}/payment/getorder`)
        ).data;
        if (response.status === "SUCCESS") {
            set(ordersAtom, response?.data);
        }
    } catch (error) {
        const message = `Internal Server Error`;
        const description = "";
        openNotificationWithIcon("error", message, description);
    }
});
