import { atom } from "jotai";
import axios from "axios";
import { backend_url, loaderAtom } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
export const updateProductFunction = atom(null, async (get, set, args) => {
    set(loaderAtom, true);
    const { name, price, description, productId } = args;
    try {
        const response = await (
            await axios.put(`${backend_url}/admin/updateProduct`, {
                name,
                price,
                description,
                _id: productId,
            })
        ).data;
        if (response.status === "SUCCESS") {
            const message = `product updated successfully!`;
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
