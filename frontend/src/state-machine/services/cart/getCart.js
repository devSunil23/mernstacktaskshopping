import { atom } from "jotai";
import axios from "axios";
import { backend_url } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
import { cartsAtom } from "../../models/cart";

export const getCartServices = atom(null, async (get, set, args) => {
    try {
        const response = await (
            await axios.get(`${backend_url}/customer/getCart`)
        ).data;
        if (response.status === "SUCCESS") {
            set(cartsAtom, response?.data);
        }
    } catch (error) {
        const message = `Internal Server Error`;
        const description = "";
        openNotificationWithIcon("error", message, description);
    }
});
