import { Router } from "express";
import createPayment from "../controller/paymentcontroller/createPaymentController.js";
import orderSave from "../controller/paymentcontroller/orderSaveController.js";
import getOrder from "../controller/paymentcontroller/ordergetController.js";

const paymentRouter = Router();
paymentRouter.post("/order", createPayment);
paymentRouter.post("/paymentsuccess", orderSave);
paymentRouter.get("/getorder", getOrder);
export default paymentRouter;
