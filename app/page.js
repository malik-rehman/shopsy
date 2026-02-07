"use client";
import React, { useEffect } from 'react';
import Footer from '@/Components/Footer';
import Banner from '@/Components/Banner';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import Products from '@/Components/Products';
import Subscribe from '@/Components/Subscribe';
import Testimonial from '@/Components/Testimonial';
import TopProducts from '@/Components/TopProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Banner />
      <TopProducts />
      <Testimonial />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Page;
