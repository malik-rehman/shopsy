"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      link: "#/Home",
    },
    {
      title: "About",
      link: "#/About",
    },
    {
      title: "Contact",
      link: "#/Contact",
    },
    {
      title: "Blog",
      link: "#/Blog",
    },
  ];
  const footerImg = {
    backgroundImage: `url(/Banner/footer-pattern.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={footerImg}>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 px-8 pt-8">
          <div className="text-white py-4 text-left">
            <div className="flex gap-3 items-center py-4">
              <img
                src="https://shopsy-tcj.netlify.app/assets/logo-Jm4BVSCI.png"
                className="w-[50px]"
              />
              shopsy
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              dolores commodi possimus.
            </p>
          </div>
          <div className="text-white flex justify-center gap-14 items-center">
            <div className="text-white flex flex-col gap-y-5 py-4">
              
              {footerLinks.map((link,index) => (
                <div
                  className="text-white cursor-pointer hover:translate-x-1 duration-300 block hover:text-orange-400"
                  key={index}
                >
                  {" "}
                  <span>{link.title}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-5 ">
             
              {footerLinks.map((link, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:translate-x-1 duration-300 block hover:text-orange-400"
                >
                  <span>{link.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* social icons part */}
          <div className="text-white">
            <div className="flex items-center gap-3 mt-6 justify-center">
              <a href="#">
                <FaInstagram className="text-3xl hover:rotate-[360deg] duration-300  hover:text-orange-400" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:rotate-[360deg] duration-300  hover:text-orange-400" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:rotate-[360deg] duration-300  hover:text-orange-400" />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3 justify-center">
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center text-black sm:text-white gap-3 mt-3 justify-center">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
