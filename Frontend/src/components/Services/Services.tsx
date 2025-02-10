import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import ServicesCard from '../Services/ServiceCard';
import { services } from '../../data/servicesData';
import aboutBg from "../../../img/about_bg.jpg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='py-8 bg-[#121212]'>
      <div
        className="relative w-full h-[250px] bg-cover bg-center opacity-80 flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#121212] bg-opacity-75"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 md:px-12 mx-auto text-center">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            ConvergeSol Overview
          </h1>

          <p className="mt-2 text-xs sm:text-sm md:text-lg lg:text-xl">
            <Link to="/" className="font-medium">Home</Link> /
            <Link to="/services"> Services</Link>
          </p>
        </div>
      </div>
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-center text-4xl font-extrabold mb-6">
          Our Services
        </h2>
        <p className="text-center text-lg mb-12">
          Fostering a playful & engaging learning environment
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default: 1 card on all screens
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 card on screens below 640px
            },
            768: {
              slidesPerView: 2, // 2 cards on medium screens (>= 768px)
            },
            1024: {
              slidesPerView: 3, // 3 cards on large screens (>= 1024px)
            },
          }}
          className="w-full"
        >
          {Object.values(services).map((service) => (
            <SwiperSlide key={service.id}>
              <ServicesCard
                title={service.title}
                icon={service.imageSrc} // Changed from service.icon to service.imageSrc
                details={service.details}
                path={service.altText} // Changed from service.path to service.altText
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Services;
