import express from "express";

const stateRouter = express.Router();

stateRouter.get("/states", (req, res) => {
  const headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="
  );

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch(
    "https://api.countrystatecity.in/v1/countries/IN/states",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => res.json(result))
    .catch((error) => console.log("error", error));
});
export default stateRouter;
