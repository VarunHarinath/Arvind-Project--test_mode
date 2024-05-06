import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SuccessPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/form/${id}`);
        setData(response.data);
        console.log(data);
      } catch (error) {}
    };
    fetchApi();
  }, []);

  const { id } = useParams();
  return (
    <>
      <div className="m-20">
        <div>You booking is succesfully!</div>
        <div>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{data.fname}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Phone Number</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data.phoneNumber}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">email</dt>
                <dd className="text-gray-700 sm:col-span-2">{data.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">vechicle Type</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data.vechicleType}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">city</dt>
                <dd className="text-gray-700 sm:col-span-2">{data.city}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">address</dt>
                <dd className="text-gray-700 sm:col-span-2">{data.address}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">fuel Type</dt>
                <dd className="text-gray-700 sm:col-span-2">{data.fuel}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Cost</dt>
                <dd className="text-gray-700 sm:col-span-2">{data.quantity}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
