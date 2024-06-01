import express from "express";
import {
  checkout,
  getApi,
  paymentVerification,
} from "../contollers/PaymentController.js";

const PaymentRouter = express.Router();

PaymentRouter.post("/checkout/:amount", checkout);
PaymentRouter.get("/api", getApi);

PaymentRouter.post("/verification/:id", paymentVerification);

export default PaymentRouter;
