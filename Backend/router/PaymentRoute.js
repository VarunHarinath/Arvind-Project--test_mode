import express from "express";
import { checkout, getApi } from "../contollers/PaymentController.js";

const PaymentRouter = express.Router();

PaymentRouter.post("/checkout/:amount", checkout);
PaymentRouter.get("/api", getApi);

export default PaymentRouter;
