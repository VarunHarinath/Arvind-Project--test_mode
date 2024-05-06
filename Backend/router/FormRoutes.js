import express from "express";
import {
  formGet,
  formGetById,
  formPost,
} from "../contollers/formController.js";

const formRouter = express.Router();

formRouter.get("/", formGet);
formRouter.get("/:id", formGetById);
formRouter.post("/", formPost);

export default formRouter;
