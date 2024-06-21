import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { redirect } from "react-router-dom";


export default function Form() {
  const [statedata, setStateData] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [city, setCity] = useState("HYD");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zipCode, SetZipCode] = useState("");
  const [fuel, setFuel] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [customerId, setCustomerId] = useState("");

  const onSubmitPayment = async () => {
    try {
      // Sending request to create an order
      const orderResponse = await axios.post(
        `http://localhost:5000/checkout/${price}`
      );
      const Orderid = orderResponse.data.id;

      // Fetching the Razorpay API key
      const apiKeyResponse = await axios.get("http://localhost:5000/api");
      const apiKey = apiKeyResponse.data.key;

      // Razorpay options
      const options = {
        key: apiKey,
        amount: price * 100, // Amount in paise (1 INR = 100 paise)
        currency: "INR",
        name: "Fuel X Corp.",
        description: "FuelX Payment Gateway Integration",
        image: "", // Add a valid image URL if needed
        order_id: Orderid,
        callback_url: `http://localhost:5000/verification/${customerId}`,
        prefill: {
          name: `${fName} ${lName}`,
          email: email,
          contact: phoneNumber,
        },
        notes: {
          address: "Fuel X Corporate Office",
        },
        theme: {
          color: "#f2f2f2",
        },
        handler: function (response) {
          // This function is called when the payment is successful
          axios
            .post(`http://localhost:5000/verification/${customerId}`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })
            .then((res) => {
              console.log("Verification response:", res.data);
              // Redirect to success page or show success message
              window.location.href = `http://localhost:5173/success/${customerId}`;
            })
            .catch((error) => {
              console.error("Verification error:", error);
              alert("Payment verification failed. Please try again.");
            });
        },
        modal: {
          ondismiss: function () {
            // Handle the case when the user closes the modal without completing the payment
            console.log("Payment modal closed");
          },
        },
      };

      // Open Razorpay payment modal
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      // Log the full error for debugging
      console.error("Payment error:", error);
    }
  };

  const FUEL_PRICES = {
    Petrol: 107.41, // price per liter in your currency
    Diesel: 95.65,
    "Premium Petrol": 120,
  };
  const handleIncrease = () => {

    setQuantity((prevQuantity) => (prevQuantity >= 10 ? prevQuantity : prevQuantity+1));

    setQuantity((prevQuantity) =>
      prevQuantity >= 10 ? prevQuantity : prevQuantity + 1
    );

  };

  const handleDecrease = () => {
    // Prevent decreasing below 0 liters
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  useEffect(() => {
    const FUEL_PRICES = {
      Petrol: 109.53,
      Diesel: 82.62,
      "Premium Petrol": 120.76,
    };
    const pricePerLiter = FUEL_PRICES[fuel] || 0;
    setPrice(quantity * pricePerLiter);
  }, [quantity, fuel]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateFields();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    const postData = {
      fname: fName,
      lname: lName,
      email: email,
      phoneNumber: phoneNumber,
      vehicleType: vehicleType,
      city: city,
      address: address,
      state: state,
      zipCode: zipCode,
      quantity: quantity,
      fuel: fuel,
      price: price,
    };

    try {
      const response = await axios.post("http://localhost:5000/form", postData);
      if (!response) {
        console.log("error sending data", response);
      }
      setIsModelOpen(true);
      console.log(response.data);
      setCustomerId(response.data);
    } catch (error) {
      console.log(error);
    }

    setErrorMessage("");
  };
  const validateFields = () => {
    if (!fName.trim()) return "First name is required.";
    if (!lName.trim()) return "Last name is required.";
    if (!email.trim()) return "Please enter a correct email.";
    if (!phoneNumber.trim()) return "Phone number is required.";
    if (!vehicleType.trim()) return "Vehicle type is required.";
    if (!address.trim()) return "Address is required.";
    if (!state.trim()) return "State/Province is required.";
    if (!zipCode.trim()) return "ZIP/Postal code is required.";

    return null;
  };

  return (
    <>
      {errorMessage && (
        <div className="mt-12 mx-0 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto md:px-8">
          <div className="flex justify-between py-3">
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="self-center ml-3">
                <span className="text-red-600 font-semibold">Error</span>
                <p className="text-red-600 mt-1">
                  {errorMessage} {/* Use the state variable here */}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setErrorMessage((prevState) => "")}
              className="self-start text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {isModelOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Payment Details
                    </h3>
                    <div className="mt-2">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Customer Id :
                          </dt>
                          <dd className="text-sm text-gray-900">
                            {customerId}
                          </dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Fuel
                          </dt>
                          <dd className="text-sm text-gray-900">{fuel}</dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Quantity
                          </dt>
                          <dd className="text-sm text-gray-900">
                            {quantity} liters
                          </dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Total Price
                          </dt>
                          <dd className="text-sm text-gray-900">₹{price}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                  onClick={onSubmitPayment}
                >
                  Pay Using Razorpay
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModelOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-base mt-20 justify-center mb-5 	divide-x divide-slate-500 bg-white adjusted-height">
        <div className="overflow-y-auto max-h-screen  justify-center p-7 hover:shadow-lg hover:shadow-slate-500 transition ease-in-out delay-150 rounded-lg  ring-2 ring-offset-2 ring-offset-blue-300 hover:ring-offset-blue-500  ">
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-12 ">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className=" font-semibold leading-7 text-gray-900 font-mono m-5 text-lg">
                  Fuel X
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  please Share you information to Book your Pterol / gas
                </p>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="phoneNumber"
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        autoComplete="phoneNumber"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={city} // Set the value of the select to the state variable
                        onChange={(event) => setCity(event.target.value)} // Call the handler when the select value changes
                      >
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        value={zipCode}
                        onChange={(e) => SetZipCode(e.target.value)}
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Vechicle Type
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      To ensure the fuel type
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value="Car"
                          checked={vehicleType == "Car"}
                          onChange={(e) => setVehicleType(e.target.value)}
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Car
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value="Bike / Auto"
                          checked={vehicleType == "Bike / Auto"}
                          onChange={(e) => setVehicleType(e.target.value)}
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Bike / Auto
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value="Truck / Semi - Trucks"
                          checked={vehicleType == "Truck / Semi - Trucks"}
                          onChange={(e) => setVehicleType(e.target.value)}
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Truck / Semi - Trucks
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Type of Fuel
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Select the fuel type
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="fuel-petrol"
                          name="fuel-type"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value="Petrol"
                          checked={fuel === "Petrol"}
                          onChange={(e) => setFuel(e.target.value)}
                        />
                        <label
                          htmlFor="fuel-petrol"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Petrol
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="fuel-diesel"
                          name="fuel-type"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value="Diesel"
                          checked={fuel === "Diesel"}
                          onChange={(e) => setFuel(e.target.value)}
                        />
                        <label
                          htmlFor="fuel-diesel"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Diesel
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="fuel-premium-petrol"
                          name="fuel-type"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value="Premium Petrol"
                          checked={fuel === "Premium Petrol"}
                          onChange={(e) => setFuel(e.target.value)}
                        />
                        <label
                          htmlFor="fuel-premium-petrol"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Premium Petrol
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="p-2 text-lg text-gray-600 transition hover:opacity-75"
                  aria-label="Decrease quantity"
                  onClick={handleDecrease}
                >
                  −
                </button>
                <span>{quantity} Liters</span>
                <button
                  type="button"
                  className="p-2 text-lg text-gray-600 transition hover:opacity-75"
                  aria-label="Increase quantity"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <p>Fuel Type: {fuel}</p>
              <p>Total Price: ₹{price}</p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        
      </div>
      <div className=" m-16 mt-19"></div>
    </>
  );
}
