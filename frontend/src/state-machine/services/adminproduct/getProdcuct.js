import { atom } from "jotai";
import axios from "axios";
import { backend_url } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
import { productsAtom } from "../../models/product";

export const getProductsAtom = atom(null, async (get, set, args) => {
    try {
        const response = await (
            await axios.get(`${backend_url}/admin/getProduct`)
        ).data;
        if (response.status === "SUCCESS") {
            set(productsAtom, response?.data);
        }
    } catch (error) {
        const message = `Internal Server Error`;
        const description = "";
        openNotificationWithIcon("error", message, description);
    }
});
