"use client";
import React from "react";
import image1 from "../public/Women/women.png";
import image2 from "../public/Women/women2.jpg";
import image3 from "../public/Women/women3.jpg";
import image4 from "../public/Women/women4.jpg";
import { IoMdStar } from "react-icons/io";



const Products = () => {
  const products = [
    {
      id: 1,
      img: image1,
      title: "Ethinic Wear",
      rating: "5.1",
      author: "white",
      aosDelay: 0,
    },
    {
      id: 2,
      img: image2,
      title: "women western",
      rating: "4.5",
      author: "Red",
      aosDelay: 0,
    },
    {
      id: 3,
      img: image3,
      title: "Goggles",
      rating: "4.7",
      author: "Brown",
      aosDelay: 0,
    },
    {
      id: 4,
      img: image4,
      title: "Printed T-shirts",
      rating: "4.1",
      author: "Yellow",
      aosDelay: 0,
    },
    {
      id: 5,
      img: image2,
      title: "Fashion T-shirts",
      rating: "4.7",
      author: "Pink",
      aosDelay: 0,
    },
  ];
  return (
    <div className="mt-20 w-full">
      <div className="container text-center pb-8 px-2 mt-5">
        <h1 data-aos="fade-up"
                      
         className="text-xl text-orange-500">
          Top selling products for you
        </h1>
        <h1            data-aos="fade-up"
                       
        className="text-5xl font-bold">Products</h1>
        <p data-aos="fade-up"
       >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit voluptas a libero.
        </p>
      </div>

      <div className="grid grid-col-1 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-5 space-y-5 sm:space-y-0 sm:py-5">
        {products.map((data,index) => (
        <div key={index} className="flex flex-col justify-center items-center">
            <div key={data.id} 
               data-aos="fade-up"
               data-aos-delay={data.aosDelay}
           className="space-y-1">
              <img
                src={data.img.src}
                className="w-[150px] h-[250px] object-fit object-cover rounded-2xl"
              />
              <h1 className="font-bold">{data.title}</h1>
              <h1 className="text-gray-600">{data.author}</h1>
              <p className="flex items-center gap-1">
                <IoMdStar className="text-yellow-500" />{" "}
                <span> {data.rating}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-10 pb-4 sm:pb-0">
        <button className="bg-orange-500 hover:scale-110 duration-300 text-white py-1 px-4 rounded-full flex items-center">
          View All Button
        </button>
      </div>

      
    </div>
  );
};

export default Products;
