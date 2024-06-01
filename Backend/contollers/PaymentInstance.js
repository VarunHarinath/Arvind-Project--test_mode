import dotenv from "dotenv";
import razorpay from "razorpay";
dotenv.config();
const instance = new razorpay({
  key_id: process.env.RAZERPAY_API_KEY,
  key_secret: process.env.RAZERPAY_SECRET_KEY,
});
export default instance;
