"use client";
import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 pb-2 py-8 md:grid-cols-1 lg:grid-cols-2">
      <div className="py-8 w-full mx-auto order-1 md:order-2 lg:order-1">
        {/* image section */}
        <img
          src="/Women/women2.jpg"
          alt="Banner"
          className="mx-auto w-[400px] h-[300px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-md object-contain"
        />
      </div>
      <div className="w-full flex flex-col items-center lg:order-2 order-2 p-10">
        <div className="py-8 space-y-2 mx-auto  ">
          <h1 className="text-4xl font-bold ">Winter sale upto 50% off</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            asperiores tempora aliquam.
          </p>
          <p className="flex items-center gap-4">
            <GrSecure className="bg-[#EDE9FE] rounded-full text-4xl w-[40px] h-[40px] p-3" />
            <span>Quality Products</span>
          </p>
          <p className="flex items-center gap-4">
            <IoFastFood className="bg-[#FFEDD5] rounded-full text-4xl w-[40px] h-[40px] p-3" />
            <span>Fast Delivery</span>
          </p>
          <p className="flex items-center gap-4">
            <GiFoodTruck className="bg-[#DCFCE7] rounded-full text-4xl w-[40px] h-[40px] p-3" />
            <span>Easy Payment Method</span>
          </p>
          <p className="flex items-center gap-4">
            <GiFoodTruck className="bg-[#FEF9C3] rounded-full text-4xl w-[40px] h-[40px] p-3" />
            <span>Get Offers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
