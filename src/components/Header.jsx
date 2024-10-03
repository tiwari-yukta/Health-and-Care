import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary text-white rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight">
          Book Appointments <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-col items-start justify-center gap-3 text-white text-sm">
          <img src={assets.group_profiles}></img>
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex gap-3 items-center bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto hover:scale-105 translate-all duration-300"
          href="#speciality"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="arrow icon" />
        </a>
      </div>
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="header"
        />
      </div>
    </div>
  );
};

export default Header;
