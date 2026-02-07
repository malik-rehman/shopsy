"use client"
import React from 'react'




const Subscribe = () => {
    const BannerImg = {
        backgroundImage: `url(/Banner/orange-pattern.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      };
  return (
    <div className='mb-8'>
        <div className=" text-white py-3" style={BannerImg}>
        <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            className="w-full p-3"
          />
        </div>
      </div>
        </div>
    </div>
  )
}

export default Subscribe