"use client"
import React from "react";

import { RiSearchLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";

const menu =[
  {
    id:1,
    name:"Home",
    link:"/#",
  },
  {
    id:2,
    name:"Top Rated",
    link:"/#services",
  },
  {
    id:3,
    name:"Kids Wear",
    link:"/#",
  },
  {
    id:4,
    name:"Mens Wear",
    link:"/#",
  },

  {
    id:5,
    name:"Electronics",
    link:"/#",
  },
];
const dropdownlinks=[
  {
    id:1,
    name:"Trending Products",
    link:"/#",
  },
  {
    id:2,
    name:"Best Selling",
    link:"/#",
  },
  {
    id:3,
    name:"Top Rated",
    link:"/#",
  },
]
const Navbar = () => {
 
  return (
    <div>
      {/* upper navbar */}
      <div className="bg-orange-200 py-1">
        <div  className="container flex items-center justify-between ">
          <div>
            <a href="#" className="text-2xl sm:text-xl fo md:text-2xl lg:text-2xl  font-bold flex items-center gap-5">
              <img
                src="https://shopsy-tcj.netlify.app/assets/logo-Jm4BVSCI.png"
                alt="Logo"
                width={80}
              />
             <span className="hidden md:block">shopsy</span> 
            </a>
          </div>
          {/* search bar and order button */}
          <div>
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className=" w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 focus:outline-none focus:border-1 focus:border-orange-500 px-2 py-1"
              />
              <RiSearchLine className="absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-orange-400" />
            </div>
          </div>
          {/* order button */}
          <button   onClick={() => { alert("hello boy"); }}  className="bg-orange-400 py-1 px-4 rounded-full group flex items-center gap-3">
            <span className=" hidden group-hover:block  transition-all duration-200 font-bold text-white">Order</span>
            <RiShoppingCartFill className="text-white text-2xl" />
          </button>
         
        </div>
      </div>
      {/* lower navbar */}
      <div className=" py-3 hidden sm:block px-1 md:px-8 ">
        <ul className="nav-items flex gap-10 items-center  md:gap-5 justify-center text-2xl lg:text-xl  md:text-[17px] ">
        {menu.map((item) => (
            <li key={item.id}>
              <a className="inline-block px-2 hover:text-orange-500 duration-200" href={item.link}>{item.name}</a>
            </li>
        ))}
        <div className="list-none  group relative">
          <li ><a className="flex items-center gap-3 text-xl md:text-[16px] lg:text-xl" href="#">
          Trending Products <span><FaAngleDown /></span></a></li>
          
        
        <div className="absolute left-0 w-[100%] bg-white rounded-sm z-[999]">
           {dropdownlinks.map((data) => (
              <li key={data.id}><a className="hover:bg-orange-400 p-1 rounded-md hidden group-hover:block transition-all duration-200 w-[100%] text-[16px]" href={data.link}>{data.name}</a></li>
          ))}
          </div>
          </div>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
