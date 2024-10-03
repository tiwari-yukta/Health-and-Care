import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import RelatedDoctors from "../components/RelatedDoctors";
const Appointments = () => {
  //get doctorId from url so use useParam
  const { docId } = useParams();
  //doctors data from context
  const { doctors, currencySymbol } = useContext(AppContext);
  //now we have to find the particular doctor in the doctors array using the docId
  const [docInfo, setDocInfo] = useState(null);
  const fetchInfo = async () => {
    // const docInfo = doctors.find((doc) => doc._id === docId);
    const docInfo = doctors.find((doc) => String(doc._id) === String(docId));

    setDocInfo(docInfo);
    console.log(docInfo);
  };
  //now whenever doctors array or docId will change the page will again render
  useEffect(() => {
    fetchInfo();
  }, [doctors, docId]);
  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon}></img>
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointmnet fee:{" "}
              <span className="text-gray-600 ">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;
