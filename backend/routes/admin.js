import { Router } from "express";
import addProduct from "../controller/productcontroller/productadd.js";
import getProduct from "../controller/productcontroller/producctget.js";
import updateProduct from "../controller/productcontroller/productUpdate.js";
import deleteProducts from "../controller/productcontroller/productdelete.js";
const adminRouter = Router();
//This routes for admin
//save
adminRouter.post("/addProduct", addProduct);

//get
adminRouter.get("/getProduct", getProduct);

//update
adminRouter.put("/updateProduct", updateProduct);

//delete product
adminRouter.delete("/deleteProduct/:_id", deleteProducts);

export default adminRouter;
