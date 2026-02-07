"use client"
import React from 'react'
import Slider from 'react-slick'

const Testimonial = () => {
    const testimonialData=[
        {
            id:1,
            name:"Victor",
            text:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quas debitis exercitationem magnam tenetur?",
            img:"https://picsum.photos/101/101",
        },
        {
            id:2,
            name:"David",
            text:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quas debitis exercitationem magnam tenetur?",
            img:"https://picsum.photos/102/102",
        },
        {
            id:3,
            name:"christiano",
            text:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quas debitis exercitationem magnam tenetur?",
            img:"https://picsum.photos/103/103",
        },
        {
            id:4,
            name:"Imran Khan",
            text:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quas debitis exercitationem magnam tenetur?",
            img:"https://picsum.photos/103/103",
        },
        {
            id:5,
            name:"Sachin Tendulkar",
            text:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quas debitis exercitationem magnam tenetur?",
            img:"https://picsum.photos/104/104",
        },
    ]
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='py-8 pb-10'>
        <div className='text-center'>
            <h1 className=' text-[#FEA928]'>What our customers are saying</h1>
            <h1 className='text-4xl font-bold'>Testimonials</h1>
            <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, molestias.</p>
        </div>
        <div className='py-8' data-aos="zoom-in">
            <Slider {...settings}>
            {testimonialData.map((data)=>(
                <div className=' my-6 w-full px-8 '>
                <div key={data.id} className=' p-4 space-y-5 relative bg-[#FFF6E9] flex flex-col gap-5 rounded-xl'>
                    <div>
                        <div className='mb-4'>
                            <img src={data.img} className='rounded-full' />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                    <p className='text-black/20 text-8xl px-2 font-serif absolute top-0 right-0'> ,,</p>
                </div>
                </div>
            ))}
            </Slider>
            </div>
    </div>
  )
}

export default Testimonial