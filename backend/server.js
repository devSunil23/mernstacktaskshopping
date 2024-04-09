import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import adminRouter from "./routes/admin.js";
import cartRouter from "./routes/customer.js";
import paymentRouter from "./routes/payment.js";
config();

const app = express();
app.use(bodyParser.json());

// Configure CORS with allowed origins
app.use(cors());

// connect to mongodb
mongoose.connect(process.env.CONNECTION_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function cb() {
    console.log("Successfully connected to database ");
});

//Routers
app.use("/admin", adminRouter);
app.use("/customer", cartRouter);
app.use("/payment", paymentRouter);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
