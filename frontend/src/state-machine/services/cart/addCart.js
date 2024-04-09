import { atom } from "jotai";
import axios from "axios";
import { backend_url, loaderAtom } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
export const addCartService = atom(null, async (get, set, args) => {
    set(loaderAtom, true);
    const { productId, productName } = args;
    try {
        const response = await (
            await axios.post(`${backend_url}/customer/addCart`, {
                productId,
            })
        ).data;
        if (response.status === "SUCCESS") {
            const message = `${productName} added to cart!`;
            const description = "";
            openNotificationWithIcon("success", message, description);
        }
    } catch (error) {
        const message = `Internal Server Error`;
        const description = "";
        openNotificationWithIcon("error", message, description);
    } finally {
        set(loaderAtom, false);
    }
});
