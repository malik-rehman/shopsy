import React from "react";
import Image1 from "../public/images/sale.png";
import Image2 from "../public/images/women.png";
import Image3 from "../public/images/shopping.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  duration-200 p-10">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-[#FED7AA] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 z-30">
      <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 md:py-5">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 md:order-2 lg:order-1">
                  <h1 data-aos="zoom-out"
                       data-aos-delay="50"
                       data-aos-duration="500"
                   className="text-6xl font-bold">
                  Upto 50% off on all Men's Wear
                  </h1>
                  <p data-aos="fade-up"
                       data-aos-delay="50"
                       data-aos-duration="1000">
                  lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div  data-aos="fade-up"
                  data-aos-once="true"
                       data-aos-delay="50"
                       data-aos-duration="1000"
                       >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-orange-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 md:order-1">
                  <div data-aos="zoom-out"
                       data-aos-delay="50"
                       data-aos-duration="500">
                    <img
                      src="/images/sale.png"
                      alt=""
                      className="w-[400px] h-[400px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Hero;
