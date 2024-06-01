import formModel from "../models/Form.js";

const formGet = async (req, res) => {
  try {
    const response = await formModel.find({});
    res.status(200).sjon(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const formGetById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await formModel.findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const formPost = async (req, res) => {
  const {
    fname,
    lname,
    email,
    phoneNumber,
    vehicleType,
    city,
    address,
    state,
    zipCode,
    quantity,
    fuel,
    price,
  } = req.body;
  const updateData = {
    fname,
    lname,
    email,
    phoneNumber,
    vehicleType,
    city,
    address,
    state,
    zipCode,
    quantity,
    fuel,
    price,
  };

  try {
    const response = await formModel.create(updateData);
    res.status(200).json(response._id);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { formGet, formGetById, formPost };
