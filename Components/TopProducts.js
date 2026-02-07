"use client";

import React from "react";
import image1 from "../public/shirt/shirt.png";
import image2 from "../public/shirt/shirt2.png";
import image3 from "../public/shirt/shirt3.png";
import { IoMdStar } from "react-icons/io";

const TopProducts = () => {
  const TopProducts = [
    {
      id: 1,
      img: image1,
      title: "Casual Wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti dolores corrupti.",
    },
    {
      id: 2,
      img: image2,
      title: "Printed Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti dolores corrupti.",
    },
    {
      id: 3,
      img: image3,
      title: "Women Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti dolores corrupti.",
    },
  ];

  
  return (
    <div className="py-1 md:py-10">
      <div className="container p-10">
      
        <div className="text-left mb-24 ">
          <h1 className="text-xl text-orange-500">
            Top selling products for you
          </h1>
          <h1 className="text-5xl font-bold">Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit voluptas a libero.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center px-8 md:px-1 gap-3 space-y-14 sm:space-y-0 ">
       
        {TopProducts.map((data) => (
          <div className="bg-white rounded-2xl py-8 duration-300 shadow-xl hover:bg-gray-800 hover:text-white relative max-w-[350px] group ">
            <div className=" h-[200px]">
              <img
                src={data.img.src}
                alt="images"
                className="max-w-[200px] block group-hover:scale-110 duration-300 transform -translate-y-20 drop-shadow-xl mx-auto"
              />
            </div>
            <div className="p-1">
              <div className="flex justify-center flex-col items-center font-bold text-xl">
                <span className="flex items-center gap-1 justify-center">
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                </span>
                {data.title}
              </div>
            </div>
            <div className="text-center p-2">
              <div>{data.description}</div>
            </div>
            <div className="group flex justify-center">
              <button className="bg-orange-500 hover:scale-110 duration-300 text-white py-1 px-4 rounded-full flex items-center">
                Order
              </button>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default TopProducts;
