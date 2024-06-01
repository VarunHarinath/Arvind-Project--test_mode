import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  orderId: {
    type: String,
  },
  paymentId: {
    type: String,
  },
});

const formModel = mongoose.model("Forms", FormSchema);

export default formModel;
