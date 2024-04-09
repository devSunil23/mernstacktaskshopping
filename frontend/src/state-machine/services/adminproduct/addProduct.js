import { atom } from "jotai";
import axios from "axios";
import { backend_url, loaderAtom } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
export const addProductFunction = atom(null, async (get, set, args) => {
    set(loaderAtom, true);
    const { name, price, description } = args;
    try {
        const response = await (
            await axios.post(`${backend_url}/admin/addProduct`, {
                name,
                price,
                description,
            })
        ).data;
        if (response.status === "SUCCESS") {
            const message = `${response?.data?.name} added successfully!`;
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
