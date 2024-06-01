import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SuccessPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/form/${id}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {}
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="m-20">
        <div className="m-10">
          <h1 className=" font-semibold text-3xl text-sky-600">
            {" "}
            You booking is succesfully!
          </h1>
        </div>
        <div>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Customer Id</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?._id}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.fname}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Phone Number</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data?.phoneNumber}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">email</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">vechicle Type</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data?.vehicleType}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">city</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.city}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">address</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.address}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">fuel Type</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.fuel}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Payment Id</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data?.paymentId}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Order Id</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.orderId}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Cost</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.price}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
