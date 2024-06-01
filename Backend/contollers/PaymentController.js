import instance from "./PaymentInstance.js";

const getApi = (req, res) => {
  res.status(200).json({
    key: process.env.RAZERPAY_API_KEY,
  });
};

const checkout = async (req, res) => {
  try {
    const amount = req.params.amount;
    const options = {
      amount: parseInt(amount) * 100,
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { checkout, getApi };
