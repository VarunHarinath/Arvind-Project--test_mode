import dotenv from "dotenv";
import razorpay from "razorpay";
dotenv.config();
const instance = new razorpay({
  key_id: "rzp_test_e0XqvLxs6AOCm8",
  key_secret: "GyaJ7jAite8Hm8ZRbz4CZRsY",
});
export default instance;
