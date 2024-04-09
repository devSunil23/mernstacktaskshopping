import { atom } from "jotai";
import axios from "axios";
import { backend_url, loaderAtom } from "../../models/common";
import { openNotificationWithIcon } from "../../../functions/opennotification";
//delete product
export const deleteProductFunction = atom(null, async (get, set, args) => {
    set(loaderAtom, true);
    const { _id } = args;
    try {
        const response = await (
            await axios.delete(`${backend_url}/admin/deleteProduct/${_id}`, {})
        ).data;
        if (response.status === "SUCCESS") {
            const message = `product deleted successfully!`;
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
