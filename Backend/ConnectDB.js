import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FuelX");
    console.log("connectedo mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
