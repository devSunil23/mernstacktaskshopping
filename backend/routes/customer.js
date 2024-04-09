import { Router } from "express";
import addCartController from "../controller/cartController/cartAdd.js";
import getCartController from "../controller/cartController/getCartItems.js";
import removeFromCart from "../controller/cartController/removeFromcart.js";
const cartRouter = Router();
//This routes for admin
//save
cartRouter.post("/addCart", addCartController);
cartRouter.get("/getCart", getCartController);
cartRouter.delete("/removecart/:_id", removeFromCart);
export default cartRouter;
