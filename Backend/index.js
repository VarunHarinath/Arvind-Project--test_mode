import express from "express";
import cors from "cors";
import connectDB from "./ConnectDB.js";

// importing routes
import stateRouter from "./router/stateRoute.js";
import formRouter from "./router/FormRoutes.js";
import instance from "./contollers/PaymentInstance.js";
import PaymentRouter from "./router/PaymentRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  res.status(200).json({
    message: true,
  });
});

app.use("/form", formRouter);

app.use("/", PaymentRouter);

app.use("/info", stateRouter);
// app.get("/states", (req, res) => {
//   var headers = new Headers();
//   headers.append(
//     "X-CSCAPI-KEY",
//     "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="
//   );

//   var requestOptions = {
//     method: "GET",
//     headers: headers,
//     redirect: "follow",
//   };

//   fetch(
//     "https://api.countrystatecity.in/v1/countries/IN/states",
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((result) => res.json(result))
//     .catch((error) => console.log("error", error));
// });

app.listen(5000, () => console.log("Server is runing"));
