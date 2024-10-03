import React from "react";
import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-2xl pt-10 text-gray-500">
        CONTACT <span className="text-gray-700 font-semibold"> US</span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-12 mt-8 justify-center">
        <div>
          <img
            className="w-full md:max-w-[360px]"
            src={assets.contact_image}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-gray-900 font-semibold">OUR OFFICE</h1>
          <br></br>
          <p>Sector-46, Gurugram, Haryana</p>
          <br></br>
          <p>Tel:123 234 567</p>
          <br></br>
          <p>Email: abc@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
