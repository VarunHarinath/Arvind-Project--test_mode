import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FuelX");
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
 