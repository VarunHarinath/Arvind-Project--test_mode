import instance from "./PaymentInstance.js";
import formModel from "../models/Form.js";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const getApi = (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
};

const checkout = async (req, res) => {
  try {
    const amount = req.params.amount;
    const options = {
      amount: parseInt(amount) * 100, // Convert to paise
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error("Checkout error:", error); // Log error for debugging
    res.status(500).json(error);
  }
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  // Log received data for debugging
  console.log("Received verification request:", req.body);

  const secretKey = "GyaJ7jAite8Hm8ZRbz4CZRsY";
  if (!secretKey) {
    console.error("RAZORPAY_SECRET_KEY is not defined");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", secretKey)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    const id = req.params.id;
    try {
      const response = await formModel.findByIdAndUpdate(
        id,
        {
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
        },
        { new: true }
      );

      // Log redirection info
      console.log(
        `Payment verified. Redirecting to http://localhost:5173/success/${id}`
      );

      res.redirect(`http://localhost:5173/success/${id}`);
    } catch (error) {
      console.error("Database update error:", error);
      res.status(500).json({ error: "Database update failed" });
    }
  } else {
    console.log("Payment verification failed:", {
      razorpay_signature,
      expectedSignature,
    });
    res.status(400).json({
      message: "Payment verification failed",
    });
  }
};

export { checkout, getApi, paymentVerification };
